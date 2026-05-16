import Dexie, { type EntityTable } from "dexie"
import type { Account } from "@/features/accounts/type/account"

export const db = new Dexie("finance-master-database") as Dexie & {
  accounts: EntityTable<Account, "id">
}

db.version(1).stores({
  accounts: "++id, name, showInOverallBalance, amount",
})

export default { db }
