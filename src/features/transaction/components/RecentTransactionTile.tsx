import React from "react"
import { House } from "lucide-react"
import type { Transaction } from "@/features/transaction/type/transaction"

type RecentTransactionTile = {
  category: string
  account: string
  comment: string | null
  amount: number
  transactionMethod: Transaction["transactionMethod"]
}

const RecentTransactionTile: React.FC<RecentTransactionTile> = ({
  category,
  amount,
  account,
  comment,
  transactionMethod,
}) => {
  return (
    <div
      className={`flex w-full items-center justify-between gap-3 border-b border-gray-200 p-3`}
    >
      <div className={"flex items-center gap-3"}>
        <p className={"rounded-lg bg-primary p-2"}>
          <House color={"white"} />
        </p>
        <div>
          <p className={"font-medium"}>{category}</p>
          <p className={"text-sm text-muted-foreground"}>{account}</p>
          <p className={"text-sm text-muted-foreground italic"}>{comment}</p>
        </div>
      </div>
      <p
        className={`text-lg font-medium ${transactionMethod === "income" ? "text-income" : "text-destructive"}`}
      >
        Rs {amount.toLocaleString()}
      </p>
    </div>
  )
}

export default RecentTransactionTile
