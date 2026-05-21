import { db } from "@/database/db.ts"
import type { Transaction } from "@/features/transaction/type/transaction"

export const getAllTransactions = async () => {
  return db.transactions.toCollection().reverse().toArray()
}
export const createTransaction = async (transaction: Transaction) => {
  await db.transactions.add({
    amount: transaction.amount,
    category: transaction.category,
    comment: transaction.comment,
    fromAccount: transaction.fromAccount,
    toAccount: transaction.toAccount,
    transactionFee: transaction.transactionFee,
    transactionMethod: transaction.transactionMethod,
  })
}
