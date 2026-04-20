import React from "react"
import { Wallet } from "lucide-react"

type AccountCard = { name: string; amount: number }

const AccountCard: React.FC<AccountCard> = ({ name, amount }) => {
  return (
    <div
      className={
        "m h-30 min-w-40 rounded-lg border border-border bg-background p-3"
      }
    >
      <Wallet />
      <p className={"mt-3 text-sm text-muted-foreground"}>{name}</p>
      <p className={"mt- text-lg font-medium"}>Rs {amount.toLocaleString()}</p>
    </div>
  )
}

export default AccountCard
