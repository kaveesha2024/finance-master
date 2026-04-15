import React from "react"
import AccountCard from "@/features/accounts/components/AccountCard.tsx"
import { House } from "lucide-react"

const Home: React.FC = () => {
  const arr = [1, 1, 3, 3, 1, 3, 1]
  return (
    <div className="flex h-screen w-full overflow-hidden font-poppins text-secondary">
      <div className="h-full w-[250px] overflow-y-auto border-r border-gray-200 p-3">
        {/*<Header text={"Finance Master"} />*/}
        <h1
          className={
            "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-accent"
          }
        >
          Finance Master
        </h1>
      </div>
      <div className="h-full flex-1 overflow-y-auto bg-primary p-5">
        {/* Accounts */}
        <div className={"h-full w-full"}>
          <div
            className={
              "flex w-[400px] justify-between rounded-lg border border-gray-200 bg-white p-3"
            }
          >
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-medium"}>My Accounts</h1>
              <p className={"text-sm text-muted"}>All accounts balance</p>
              <p className={"text-xl font-semibold"}>Rs 27.00</p>
            </div>
            <div className={"h-full"}>
              <p className={"cursor-pointer text-sm text-accent"}>See all</p>
            </div>
          </div>
          <div className={"mt-5 grid grid-cols-6 gap-3"}>
            {arr.map((_, i) => (
              <AccountCard key={i} name={"HNB"} amount={1250} />
            ))}
          </div>
          <div className={"mt-5 mb-10 w-full"}>
            <h1 className={"mb-3 text-lg font-medium"}>Recent Transactions</h1>
            <div
              className={
                "mb-10 h-[600px] w-[500px] overflow-y-auto rounded-lg border border-gray-200 bg-white p-3"
              }
            >
              {arr.map((_, i) => (
                <div
                  className={`flex w-full items-center justify-between gap-3 ${i === arr.length - 1 ? "border-none" : "border-b"} border-gray-200 p-3`}
                >
                  <div className={"flex items-center gap-3"}>
                    <p className={"rounded-lg bg-accent p-2"}>
                      <House color={"white"} />
                    </p>
                    <div>
                      <p className={"font-medium"}>Category</p>
                      <p className={"text-sm text-muted"}>Account</p>
                      <p className={"text-sm text-muted italic"}>Comment</p>
                    </div>
                  </div>
                  <p className={"text-lg font-medium"}>Rs 12</p>
                </div>
              ))}
            </div>
          </div>
          <div className={"h-10"}></div>
        </div>
        {/* Recent Transactions */}
      </div>
    </div>
  )
}

export default Home
