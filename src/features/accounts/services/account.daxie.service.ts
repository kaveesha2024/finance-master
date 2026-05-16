import type { Account } from "@/features/accounts/type/account"
import { db } from "@/database/db.ts"

export const addAccount = async (account: Account): Promise<boolean> => {
  try {
    await db.accounts.add(account)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const searchAccountsByName = (searchName: string) => {
  if (!searchName.trim()) return
  return db.accounts.where("name").equals(searchName).first()
}
