import React from "react"
import AllAccountsCard from "@/features/accounts/components/AllAccountsCard.tsx"

const AllAccounts: React.FC = () => {
  return (
    <div className={"h-full w-full"}>
      <AllAccountsCard />
      <div className={"mt-5"}>All accounts table here...</div>
    </div>
  )
}

export default AllAccounts
