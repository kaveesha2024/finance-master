import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"
import type { ChangeEvent } from "react"
import { addAccount } from "@/features/accounts/services/accountService.ts"
import { v4 as uuid } from "uuid"
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
  createError: (error?: string) => void
  createNewAccount: () => void
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
    get().createError()
    const { name, value } = event.target
    set((state) => ({
      ...state,
      createNewAccountFormData: {
        ...state.createNewAccountFormData,
        [name]: value,
      },
    }))
  },
  createError: (error) => {
    set((state) => ({
      ...state,
      errorMessage: error ?? null,
    }))
  },
  createNewAccount: () => {
    get().createError()
    if (get().createNewAccountFormData.name !== "") {
      // todo Check weather the account name is already exists... 🫶🖤

      const res = addAccount({
        name: get().createNewAccountFormData.name,
        amount: get().createNewAccountFormData.balance,
        id: uuid(),
      })
      if (res) {
        set((state) => ({
          ...state,
          isCreateNewAccountFormOpen: false,
        }))
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
      get().createError('"Please fill all the information"')
    }
  },
}))

export default useAccountStore
