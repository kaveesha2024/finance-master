import React from "react"

const AppHeader: React.FC = () => {
  return (
    <header
      id="header"
      className="flex h-20 w-full items-center justify-between border-b border-border bg-background px-5"
    >
      <p className={""}>
        Overall Balance{" "}
        <span className={"text-l t font-semibold text-destructive"}>
          Rs 2,000
        </span>
      </p>
    </header>
  )
}

export default AppHeader
