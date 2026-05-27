import React from "react"
import { HiWallet } from "react-icons/hi2"

const AllAccountsCard: React.FC = () => {
  return (
    <div
      className={
        "flex h-[55px] w-[400px] items-center gap-3 rounded-lg border border-border bg-background p-3"
      }
    >
      <div
        className={
          "flex h-[35px] w-[35px] items-center justify-center rounded-lg border border-border bg-primary"
        }
      >
        <HiWallet className={"text-[18px] text-white"} />{" "}
      </div>
      <p className={"font-medium"}>3 Accounts</p>
    </div>
  )
}

export default AllAccountsCard
