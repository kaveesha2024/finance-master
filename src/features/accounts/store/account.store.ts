import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"

type AccountStore = {
  isCreateNewAccountFormOpen: boolean
  createNewAccountFormData: {
    name: string
    balance: number
  }
  accounts: Account[]
  toggleIsCreateNewAccountFormOpen: () => void
  globalHotKey: (event: { key: string }) => void
}

const useAccountStore = create<AccountStore>((set) => ({
  isCreateNewAccountFormOpen: false,
  createNewAccountFormData: {
    balance: 0,
    name: "",
  },
  accounts: [],
  toggleIsCreateNewAccountFormOpen: () => {
    set((state) => ({
      ...state,
      isCreateNewAccountFormOpen: true,
    }))
  },
  globalHotKey: (event) => {
    if (event.key === "Escape") {
      set((state) => ({
        ...state,
        isCreateNewAccountFormOpen: false,
      }))
    }
    if (event.key === "F9") {
      set((state) => ({
        ...state,
        isCreateNewAccountFormOpen: true,
      }))
    }
  },
}))

export default useAccountStore
