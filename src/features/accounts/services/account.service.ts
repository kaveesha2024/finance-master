import type { Account } from "@/features/accounts/type/account"

export const getAccounts = (): Account[] => {
  const accounts = localStorage.getItem("accounts")
  if (!accounts) {
    return []
  }
  return JSON.parse(accounts)
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
export const deleteAccount = (name: string): boolean => {
  const accounts = getAccounts()
  const newAccounts = accounts.filter((account) => account.name !== name)
  setAccounts(newAccounts)
  return true
}
export const getAccountById = (name: string): Account | null => {
  const accounts = getAccounts()
  const account = accounts.find((account) => account.name === name)
  if (!account) {
    return null
  }
  return account
}
export const addShowOverallBalanceToAllAccounts = () => {
  const accounts = getAccounts()
  const newAccounts: Account[] = []
  for (const account of accounts) {
    account.showInOverallBalance = true
    newAccounts.push(account)
  }
  setAccounts(newAccounts)
}
