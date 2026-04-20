import React from "react"

const AppSidebar: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between overflow-auto border-r border-border bg-background p-3">
      <h1
        className={
          "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-primary"
        }
      >
        Finance Master
      </h1>
    </div>
  )
}

export default AppSidebar
