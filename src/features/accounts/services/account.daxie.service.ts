import { db } from "@/database/db.ts"
import type { Account } from "@/features/accounts/type/account"

export const searchAccountsByName = (searchName: string) => {
  if (!searchName.trim()) return
  return db.accounts.where("name").equals(searchName).first()
}

export const getAllAccounts = async () => {
  return db.accounts.toArray()
}

export const setAccounts = async (accounts: Account[]) => {
  await db.accounts.bulkPut(accounts)
}
