import React from "react"
import { useNavigate } from "react-router-dom"

type AllAccountsBalanceCard = {
  allAccountsBalance: number
}

const AllAccountsBalanceCard: React.FC<AllAccountsBalanceCard> = ({
  allAccountsBalance,
}) => {
  const navigate = useNavigate()
  return (
    <div
      className={
        "flex w-[400px] justify-between rounded-lg border border-border bg-background p-3"
      }
    >
      <div className={"flex flex-col gap-2"}>
        <h1 className={"font-medium"}>My Accounts</h1>
        <p className={"text-sm text-muted-foreground"}>All accounts balance</p>
        <p className={"text-xl font-semibold"}>
          Rs {allAccountsBalance.toLocaleString()}
        </p>
      </div>
      <div className={"h-full"}>
        <p
          className={"cursor-pointer text-sm text-primary"}
          onClick={() => navigate("/all_accounts")}
        >
          See all
        </p>
      </div>
    </div>
  )
}

export default AllAccountsBalanceCard
