import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"
import type { ChangeEvent } from "react"
import {
  addAccount,
  getAccounts,
} from "@/features/accounts/services/account.service.ts"
import { toast } from "sonner"

type AccountStore = {
  isCreateNewAccountFormOpen: boolean
  errorMessage: string | null
  createNewAccountFormData: {
    name: string
    balance: number
  }
  accounts: Account[]
  globalHotKey: (event: { key: string }) => void
  handleCreateNewAccountFormInputs: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  setError: (error?: string) => void
  createNewAccount: () => void
  getAllAccounts: () => void
}

const useAccountStore = create<AccountStore>((set, get) => ({
  isCreateNewAccountFormOpen: false,
  errorMessage: null,
  createNewAccountFormData: {
    balance: 0,
    name: "",
  },
  accounts: [],
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
  setError: (error) => {
    set((state) => ({
      ...state,
      errorMessage: error ?? null,
    }))
  },
  createNewAccount: () => {
    get().setError()
    if (get().createNewAccountFormData.name !== "") {
      // todo Check weather the account name is already exists... 🫶🖤
      const allAcounts = getAccounts()
      const existingAccountIndex = allAcounts.findIndex(
        (account) => account.name === get().createNewAccountFormData.name
      )
      if (existingAccountIndex !== -1) {
        get().setError("This account is already exists")
        return
      }
      const response = addAccount({
        name: get().createNewAccountFormData.name.trim(),
        amount: get().createNewAccountFormData.balance,
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
  },
  getAllAccounts: () => {
    const allAccounts = getAccounts()
    set((state) => ({
      ...state,
      accounts: allAccounts,
    }))
  },
}))

export default useAccountStore
