import { db } from "@/database/db.ts"

export const searchAccountsByName = (searchName: string) => {
  if (!searchName.trim()) return
  return db.accounts.where("name").equals(searchName).first()
}

export const getAllAccounts = async () => {
  return db.accounts.toArray()
}
