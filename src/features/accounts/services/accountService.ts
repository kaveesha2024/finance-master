import type { Account } from "@/features/accounts/type/account"

export const getAccounts = (): Account[] => {
  const acc = localStorage.getItem("accounts")
  if (!acc) {
    return []
  }
  return JSON.parse(acc)
}
export const setAccounts = (accounts: Account[]): boolean => {
  localStorage.setItem("accounts", JSON.stringify(accounts))
  return true
}
export const addAccount = (account: Account): boolean => {
  const accounts = getAccounts()
  accounts.push(account)
  setAccounts(accounts)
  return true
}
export const deleteAccount = (id: string): boolean => {
  const accounts = getAccounts()
  const newAccounts = accounts.filter((account) => account.id !== id)
  setAccounts(newAccounts)
  return true
}
export const getAccountById = (id: string): Account | null => {
  const accounts = getAccounts()
  const account = accounts.find((account) => account.id === id)
  if (!account) {
    return null
  }
  return account
}
