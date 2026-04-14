import type { Transaction } from "@/features/transaction/type/transaction"

export const getAllTransactions = (): Transaction[] => {
  const transaction = localStorage.getItem("transactions")
  if (!transaction) {
    return []
  }
  return JSON.parse(transaction)
}
export const setTransactions = (transactions: Transaction[]): boolean => {
  localStorage.setItem("transactions", JSON.stringify(transactions))
  return true
}
export const addTransaction = (transaction: Transaction): boolean => {
  const allTransactions = getAllTransactions()
  allTransactions.push(transaction)
  setTransactions(allTransactions)
  return true
}
