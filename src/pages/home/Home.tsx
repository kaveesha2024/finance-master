import React, { useEffect } from "react"
import AccountCard from "@/features/accounts/components/AccountCard.tsx"
import { House } from "lucide-react"
import useAccountStore from "@/features/accounts/store/account.store.ts"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import useCategoryStore from "@/features/category/store/category.store.ts"
import CreateNewAccountForm from "@/features/accounts/components/CreateNewAccountForm.tsx"
import TransactionForm from "@/features/transaction/components/TransactionForm.tsx"
import ChooseCategoryForm from "@/features/category/components/ChooseCategoryForm.tsx"

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
  const arr = [1, 1, 3, 3, 1, 3, 1]
  return (
    <div className={"min-h-full w-full"}>
      <div
        className={
          "flex w-[400px] justify-between rounded-lg border border-border bg-background p-3"
        }
      >
        <div className={"flex flex-col gap-2"}>
          <h1 className={"font-medium"}>My Accounts</h1>
          <p className={"text-sm text-muted-foreground"}>
            All accounts balance
          </p>
          <p className={"text-xl font-semibold"}>Rs 27.00</p>
        </div>
        <div className={"h-full"}>
          <p className={"cursor-pointer text-sm text-primary"}>See all</p>
        </div>
      </div>
      <div className={"mt-5 grid grid-cols-6 gap-3"}>
        {arr.map((_, i) => (
          <AccountCard key={i} name={"HNB"} amount={1250} />
        ))}
      </div>
      <div className={"mt-5 w-full"}>
        <h1 className={"mb-3 text-lg font-medium"}>Recent Transactions</h1>
        <div
          className={
            "h-[600px] w-[500px] overflow-y-auto rounded-lg border border-border bg-background p-3"
          }
        >
          {arr.map((_, i) => (
            <div
              className={`flex w-full items-center justify-between gap-3 ${i === arr.length - 1 ? "border-none" : "border-b"} border-gray-200 p-3`}
            >
              <div className={"flex items-center gap-3"}>
                <p className={"rounded-lg bg-primary p-2"}>
                  <House color={"white"} />
                </p>
                <div>
                  <p className={"font-medium"}>Category</p>
                  <p className={"text-sm text-muted-foreground"}>Account</p>
                  <p className={"text-sm text-muted-foreground italic"}>
                    Comment
                  </p>
                </div>
              </div>
              <p className={"text-lg font-medium"}>Rs 12</p>
            </div>
          ))}
        </div>
      </div>
      {accountStore.isCreateNewAccountFormOpen && <CreateNewAccountForm />}
      {transactionStore.transactionMode && <TransactionForm />}
      {categoryStore.isCategoryFormOpen &&
        categoryStore.selectedCategory === null && <ChooseCategoryForm />}
    </div>
  )
}

export default Home
