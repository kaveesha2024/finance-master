import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"
import type { ChangeEvent } from "react"
import { db } from "@/database/db.ts"
import {
  getAllAccounts,
  searchAccountsByName,
} from "@/features/accounts/services/account.daxie.service.ts"
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
  handleShowInOverallBalance: (showInOverallBalance: boolean) => void
  createNewAccount: () => Promise<void>
  getAllAccounts: () => Promise<void>
  getOverallBalance: () => Promise<void>
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
  handleShowInOverallBalance: (event) => {
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
  createNewAccount: async () => {
    get().setError()
    if (get().createNewAccountFormData.name.trim() === "") {
      get().setError("Please enter a name.")
      return
    }
    const alreadyExistingAccount = await searchAccountsByName(
      get().createNewAccountFormData.name.trim()
    )
    if (!alreadyExistingAccount) {
      try {
        await db.accounts.add({
          name: get().createNewAccountFormData.name.trim(),
          amount: get().createNewAccountFormData.balance,
          showInOverallBalance:
            get().createNewAccountFormData.showInOverallBalance,
        })
        set((state) => ({
          ...state,
          isCreateNewAccountFormOpen: false,
        }))
        toast.success("Successful", {
          description: "Your account has been created!",
          position: "bottom-right",
        })
        const allAccounts = await getAllAccounts()
        set((state) => ({
          ...state,
          allAccounts,
        }))
        await get().getOverallBalance()
      } catch (e) {
        console.log(e)
      }
    } else {
      get().setError("This account name is already in use")
    }
  },
  getAllAccounts: async () => {
    try {
      const allAccounts = await getAllAccounts()
      set((state) => ({
        ...state,
        allAccounts: allAccounts,
      }))
    } catch (e) {
      console.log(e)
    }
  },
  getOverallBalance: async () => {
    try {
      const accounts = await getAllAccounts()
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
    } catch (error) {
      console.log(error)
    }
  },
}))

export default useAccountStore
