import React from "react"

type AppHeader = {
  overallBalance: number
}

const AppHeader: React.FC<AppHeader> = ({ overallBalance }) => {
  return (
    <header
      id="header"
      className="flex h-20 w-full items-center justify-between border-b border-border bg-background px-5"
    >
      <p className={""}>
        Overall Balance{" "}
        <span className={"text font-semibold text-destructive"}>
          Rs {overallBalance.toLocaleString()}
        </span>
      </p>
    </header>
  )
}

export default AppHeader
