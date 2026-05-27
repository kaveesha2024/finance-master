import React from "react"
import { HiWallet } from "react-icons/hi2"
import { Button } from "@/components/ui/button.tsx"

type AllAccountsCardProps = {
  amount: number
}
const AllAccountsCard: React.FC<AllAccountsCardProps> = ({ amount }) => {
  return (
    <div
      className={
        "flex h-13.75 w-100 items-center gap-3 rounded-lg border border-border bg-background p-3"
      }
    >
      <div
        className={
          "flex h-8.75 w-8.75 items-center justify-center rounded-lg border border-border bg-primary"
        }
      >
        <HiWallet className={"text-[18px] text-white"} />{" "}
      </div>
      <p className={"font-medium"}>
        {amount <= 0 ? (
          <span>
            Try to
            <Button className={"ml-"} variant={"link"}>
              Create
            </Button>
            new account
          </span>
        ) : (
          `${amount} Accounts`
        )}{" "}
      </p>
    </div>
  )
}

export default AllAccountsCard
