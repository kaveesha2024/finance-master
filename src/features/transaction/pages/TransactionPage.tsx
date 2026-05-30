import React, { useEffect } from "react"
import AllTransactionsTable from "@/features/transaction/components/tables/AllTransactionsTable.tsx"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"

const TransactionPage: React.FC = () => {
  const transactionStore = useTransactionStore()
  useEffect(() => {
    transactionStore.getAllTransactions()
  }, [])
  return (
    <div>
      <AllTransactionsTable />
    </div>
  )
}

export default TransactionPage
