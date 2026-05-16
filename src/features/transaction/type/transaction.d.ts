import type { TransactionStore } from "@/features/transaction/store/transaction.store.ts"

export type Transaction = {
  id?: string
  category: string
  amount: number
  comment: string
  transactionMethod: TransactionStore["transactionFormData"]["transactionMethod"]
  fromAccount: string
  toAccount: string
  transactionFee: number
}
