import React from "react"
import Header from "@/components/ui/header.tsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"

const Overview: React.FC = () => {
  return (
    <div className="m-5 w-full">
      {/* Account Section Starts */}
      <div className={"w-full"}>
        <Header text={"Accounts"} />
        <div className={"flex gap-5"}>
          <Card className={"w-[400px]"}>
            <CardHeader>
              <CardTitle>HNB</CardTitle>
              <CardDescription>__</CardDescription>
              <CardAction> Action</CardAction>
            </CardHeader>
            <CardContent>
              <p className={"text-3xl"}>Rs 1500.00</p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Account Section Ends */}
    </div>
  )
}

export default Overview
