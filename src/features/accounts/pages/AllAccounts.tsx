import React, { useEffect } from "react"
import AllAccountsCard from "../components/cards/AllAccountsCard.tsx"
import AllAccountsTable from "@/features/accounts/components/tables/AllAccountsTable.tsx"
import useAccountStore from "@/features/accounts/store/account.store.ts"

const AllAccounts: React.FC = () => {
  const accountStore = useAccountStore()
  useEffect(() => {
    accountStore.getAllAccounts()
  }, [])
  return (
    <div className={"h-full w-full"}>
      <AllAccountsCard amount={accountStore.allAccounts.length} />
      <AllAccountsTable />
    </div>
  )
}

export default AllAccounts
