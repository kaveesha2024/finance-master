import React, { useEffect } from "react"
import AccountCard from "../../features/accounts/components/cards/AccountCard.tsx"
import useAccountStore from "@/features/accounts/store/account.store.ts"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import useCategoryStore from "@/features/category/store/category.store.ts"
import CreateNewAccountForm from "../../features/accounts/components/forms/CreateNewAccountForm.tsx"
import TransactionForm from "@/features/transaction/components/TransactionForm.tsx"
import ChooseCategoryForm from "@/features/category/components/ChooseCategoryForm.tsx"
import AllAccountsBalanceCard from "../../features/accounts/components/cards/AllAccountsBalanceCard.tsx"
import RecentTransactionTile from "@/features/transaction/components/RecentTransactionTile.tsx"

const Home: React.FC = () => {
  const accountStore = useAccountStore()
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoryStore()
  useEffect(() => {
    accountStore.getAllAccounts()
    transactionStore.getAllTransactions()
    window.addEventListener("keydown", accountStore.globalHotKey)
    window.addEventListener("keydown", transactionStore.globalHotKey)
    window.addEventListener("keydown", categoryStore.globalHotKey)
    return () => {
      window.removeEventListener("keydown", accountStore.globalHotKey)
      window.removeEventListener("keydown", transactionStore.globalHotKey)
      window.removeEventListener("keydown", categoryStore.globalHotKey)
    }
  }, [])
  return (
    <div className={"min-h-full w-full"}>
      <AllAccountsBalanceCard
        allAccountsBalance={accountStore.overallBalance}
      />
      <div className={"mt-5 grid grid-cols-6 gap-3"}>
        {accountStore.allAccounts.map((account, i) => (
          <AccountCard key={i} name={account.name} amount={account.amount} />
        ))}
      </div>
      <div className={"mt-5 w-full"}>
        <h1 className={"mb-3 text-lg font-medium"}>
          {transactionStore.allTransactions.length <= 0
            ? "No recent transactions"
            : "Recent Transactions"}
        </h1>
        {transactionStore.allTransactions.length > 0 && (
          <div
            className={
              "max-h-150 w-125 overflow-y-auto rounded-lg border border-border bg-background p-3"
            }
          >
            {transactionStore.allTransactions.map((transaction, i) => (
              <RecentTransactionTile
                key={i}
                category={transaction.category}
                account={transaction.toAccount}
                comment={transaction.comment}
                amount={transaction.amount}
                transactionMethod={transaction.transactionMethod}
              />
            ))}
          </div>
        )}
      </div>
      {accountStore.isCreateNewAccountFormOpen && <CreateNewAccountForm />}
      {transactionStore.transactionMode && <TransactionForm />}
      {categoryStore.isCategoryFormOpen &&
        categoryStore.selectedCategory === null && <ChooseCategoryForm />}
    </div>
  )
}

export default Home
