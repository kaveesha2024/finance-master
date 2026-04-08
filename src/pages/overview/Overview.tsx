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

const Overview: React.FC = () => {
  const accountStore = useAccountStore()
  useEffect(() => {
    window.addEventListener("keydown", accountStore.globalHotKey)
    return () => {
      window.removeEventListener("keydown", accountStore.globalHotKey)
    }
  }, [])
  console.log(accountStore.isCreateNewAccountFormOpen)
  return (
    <>
      <div className="m-5 w-full">
        {/* Account Section Starts */}
        <div className={"w-full"}>
          <div className={"flex items-center gap-2"}>
            <Header text={"Accounts"} />
            <div className="mb-2 font-mono text-xs text-muted-foreground">
              (Press <kbd>F9</kbd> to create)
            </div>
          </div>
          <div className={"flex gap-5"}>
            <Card className={"w-[400px]"}>
              <CardHeader>
                <CardTitle>HNB</CardTitle>
                <CardDescription>__</CardDescription>
                <CardAction
                  className={
                    "cursor-pointer text-xs text-primary hover:underline"
                  }
                  onClick={() =>
                    accountStore.toggleIsCreateNewAccountFormOpen()
                  }
                >
                  create new
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className={"text-3xl"}>Rs 1500.00</p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Account Section Ends */}

        <div className={"mt-10 grid w-full grid-cols-3 gap-5"}>
          {/* Transactions Section */}
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
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Header text={"Loans to pay this month"} />
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
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Header text={"Lendings"} />
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
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
                <div
                  className={
                    "flex h-[40px] w-full items-center justify-start border-b hover:bg-secondary"
                  }
                >
                  Kaveesha
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {accountStore.isCreateNewAccountFormOpen && <CreateNewAccountForm />}
    </>
  )
}

export default Overview
