import React from "react"
import AllAccountsCard from "../components/cards/AllAccountsCard.tsx"
import AllAccountsTable from "@/features/accounts/components/tables/AllAccountsTable.tsx"

const AllAccounts: React.FC = () => {
  return (
    <div className={"h-full w-full"}>
      <AllAccountsCard />
      <AllAccountsTable />
    </div>
  )
}

export default AllAccounts
