/*
import React, { useEffect } from "react"
import Header from "@/components/ui/header.tsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import useAccountStore from "@/features/accounts/store/account.store.ts"
import CreateNewAccountForm from "@/features/accounts/components/CreateNewAccountForm.tsx"
import type { Account } from "@/features/accounts/type/account"
import TransactionForm from "@/features/transaction/components/TransactionForm.tsx"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import useCategoryStore from "@/features/category/store/category.store.ts"
import ChooseCategoryForm from "@/features/category/components/ChooseCategoryForm.tsx"
import type { Transaction } from "@/features/transaction/type/transaction"

const Overview: React.FC = () => {
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
    <>
      <div className="m-5 w-full">
        {/!* Account Section Starts *!/}
        <div className={"w-full"}>
          <div className={"flex items-center gap-2"}>
            <Header text={"Accounts"} />
            <div className="mb-2 font-mono text-xs text-muted-foreground">
              (Press <kbd>F9</kbd> to create)
            </div>
          </div>
          <div className={"flex gap-5"}>
            {accountStore.allAccounts.map((account: Account, index: number) => (
              <Card key={index} className={"w-[400px]"}>
                <CardHeader>
                  <CardTitle>{account.name}</CardTitle>
                  <CardDescription>__</CardDescription>
                  <CardAction className={"text-xs text-primary"}>
                    press F9
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className={"text-3xl font-semibold"}>
                    Rs {account.amount.toLocaleString()}/=
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/!* Account Section Ends *!/}

        <div className={"mt-10 grid w-full grid-cols-3 gap-5"}>
          {/!* Transactions Section *!/}
          <div>
            <Header text={"Recent Transactions"} />
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardAction
                  className={
                    "cursor-pointer text-xs text-primary hover:underline"
                  }
                >
                  see all
                </CardAction>
              </CardHeader>
              <CardContent className={"flex flex-col gap-5"}>
                {transactionStore.allTransactions.map(
                  (transaction: Transaction, index: number) => (
                    <div
                      key={index}
                      className={
                        "-[40px] flex w-full items-center justify-between border-b hover:bg-secondary"
                      }
                    >
                      <div className={"flex flex-col gap-1"}>
                        <p className={"flex text-[16px]"}>
                          <span> {transaction.category}</span>
                        </p>
                        <div>
                          <p className={"text-xs text-muted-foreground"}>HNB</p>
                        </div>
                        {transaction.comment && (
                          <blockquote className="text-xs text-muted-foreground italic">
                            {transaction.comment}
                          </blockquote>
                        )}
                      </div>
                      <p
                        className={
                          transaction.transactionMethod === "income"
                            ? "font-semibold text-chart-3"
                            : "font-semibold text-destructive"
                        }
                      >
                        Rs {transaction.amount.toLocaleString()}/=
                      </p>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {accountStore.isCreateNewAccountFormOpen && <CreateNewAccountForm />}
      {transactionStore.transactionMode && <TransactionForm />}
      {categoryStore.isCategoryFormOpen &&
        categoryStore.selectedCategory === null && <ChooseCategoryForm />}
    </>
  )
}

export default Overview
*/
