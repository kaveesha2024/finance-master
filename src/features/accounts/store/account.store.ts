import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"

type AccountStore = {
  isCreateNewAccountFormOpen: boolean
  createNewAccountFormData: {
    name: string
    balance: number
  }
  accounts: Account[]
  globalHotKey: (event: { key: string }) => void
}

const useAccountStore = create<AccountStore>((set) => ({
  isCreateNewAccountFormOpen: false,
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
    }
  },
}))

export default useAccountStore
