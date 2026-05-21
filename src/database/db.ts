import Dexie, { type EntityTable } from "dexie"
import type { Account } from "@/features/accounts/type/account"
import type { Transaction } from "@/features/transaction/type/transaction"

export const db = new Dexie("finance-master-database") as Dexie & {
  accounts: EntityTable<Account, "id">
  transactions: EntityTable<Transaction, "id">
}

db.version(1).stores({
  accounts: "++id, name, showInOverallBalance, amount",
  transactions:
    "++id, category, amount, comment, transactionMethod, fromAccount, toAccount, transactionFee",
})

export default { db }
