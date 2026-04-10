import { create } from "zustand"

export type TransactionStore = {
  transactionMode: boolean
}

const useTransactionStore = create<TransactionStore>(() => ({
  transactionMode: false,
}))
export default useTransactionStore
