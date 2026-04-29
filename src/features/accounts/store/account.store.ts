import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"
import type { ChangeEvent } from "react"
import {
  addAccount,
  getAccounts,
  isAccountAlreadyExists,
} from "@/features/accounts/services/account.service.ts"
import { toast } from "sonner"

type AccountStore = {
  isCreateNewAccountFormOpen: boolean
  errorMessage: string | null
  createNewAccountFormData: {
    name: string
    balance: number
    showInOverallBalance: boolean
  }
  overallBalance: number
  allAccounts: Account[]
  globalHotKey: (event: { key: string }) => void
  handleCreateNewAccountFormInputs: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  setError: (error?: string) => void
  setShowInOverallBalance: (showInOverallBalance: boolean) => void
  createNewAccount: () => void
  getAllAccounts: () => void
  getOverallBalance: () => void
}

const useAccountStore = create<AccountStore>((set, get) => ({
  isCreateNewAccountFormOpen: false,
  errorMessage: null,
  createNewAccountFormData: {
    balance: 0,
    name: "",
    showInOverallBalance: true,
  },
  allAccounts: [],
  overallBalance: 0,
  globalHotKey: (event) => {
    switch (event.key) {
      case "Escape":
        set((state) => ({
          ...state,
          isCreateNewAccountFormOpen: false,
          errorMessage: null,
          createNewAccountFormData: {
            balance: 0,
            name: "",
            showInOverallBalance: true,
          },
        }))
        break
      case "F9":
        set((state) => ({
          ...state,
          isCreateNewAccountFormOpen: true,
        }))
        break
      case "Enter":
        get().createNewAccount()
    }
  },
  handleCreateNewAccountFormInputs: (event) => {
    get().setError()
    const { name, value } = event.target
    set((state) => ({
      ...state,
      createNewAccountFormData: {
        ...state.createNewAccountFormData,
        [name]: name === "balance" ? Number(value) : value,
      },
    }))
  },
  setShowInOverallBalance: (event) => {
    set((state) => ({
      ...state,
      createNewAccountFormData: {
        ...state.createNewAccountFormData,
        showInOverallBalance: event,
      },
    }))
  },
  setError: (error) => {
    set((state) => ({
      ...state,
      errorMessage: error ?? null,
    }))
  },
  createNewAccount: () => {
    get().setError()
    if (get().createNewAccountFormData.name !== "") {
      if (isAccountAlreadyExists(get().createNewAccountFormData.name)) {
        get().setError("This account name already exists")
        return
      }
      const allAccounts = getAccounts()
      const existingAccountIndex = allAccounts.findIndex(
        (account) => account.name === get().createNewAccountFormData.name
      )
      if (existingAccountIndex !== -1) {
        get().setError("This account is already exists")
        return
      }
      const response = addAccount({
        name: get().createNewAccountFormData.name.trim(),
        amount: get().createNewAccountFormData.balance,
        showInOverallBalance:
          get().createNewAccountFormData.showInOverallBalance,
      })
      if (response) {
        set((state) => ({
          ...state,
          isCreateNewAccountFormOpen: false,
        }))
        get().getAllAccounts()
        toast.success("Successful", {
          description: "Your account has been created!",
          position: "bottom-right",
        })
      } else {
        set((state) => ({
          ...state,
          errorMessage: "Something went wrong",
        }))
      }
    } else {
      get().setError('"Please fill all the information"')
    }
    set((state) => ({
      ...state,
      allAccounts: [...getAccounts()],
    }))
    get().getOverallBalance()
  },
  getAllAccounts: () => {
    const allAccounts = getAccounts()
    set((state) => ({
      ...state,
      allAccounts: allAccounts,
    }))
  },
  getOverallBalance: () => {
    const accounts = getAccounts()
    let overallBalance: number = 0
    for (const account of accounts) {
      if (account.showInOverallBalance) {
        overallBalance += account.amount
      }
    }
    set((state) => ({
      ...state,
      overallBalance,
    }))
  },
}))

export default useAccountStore
