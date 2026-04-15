import React from "react"

const AppHeader: React.FC = () => {
  return (
    <header
      id="header"
      className="flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-5"
    >
      <p className={"text-muted"}>
        Overall Balance{" "}
        <span className={"text-l font-semibold !text-destructive"}>
          Rs 2,000
        </span>
      </p>
    </header>
  )
}

export default AppHeader
