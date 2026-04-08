import { create } from "zustand"
import type { Account } from "@/features/accounts/type/account"

type AccountStore = {
  isCreateNewAccountFormOpen: boolean
  createNewAccountFormData: {
    name: string
    balance: number
  }
  accounts: Account[]
}

const useAccountStore = create<AccountStore>(() => ({
  isCreateNewAccountFormOpen: true,
  createNewAccountFormData: {
    balance: 0,
    name: "",
  },
  accounts: [],
}))

export default useAccountStore
