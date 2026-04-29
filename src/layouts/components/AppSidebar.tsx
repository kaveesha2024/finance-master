import React from "react"
import { sideBarPages } from "@/constants/sideBarPages.ts"
import { useLocation, useNavigate } from "react-router-dom"

const AppSidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="flex h-full w-full flex-col overflow-auto border-r border-border bg-background p-3">
      <h1
        className={
          "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-primary"
        }
      >
        Finance Master
      </h1>
      <div className={"mt-3"}>
        {/*<p className={"text-sm text-muted-foreground"}>Main</p>*/}
        <div className={"mt-1 flex flex-col gap-1"}>
          {sideBarPages.map((page, index: number) => {
            const Icon = page.icon
            return (
              <p
                key={index}
                onClick={() => navigate(page.path)}
                className={`flex w-full cursor-pointer items-center gap-2 rounded-tr-lg px-5 py-3 text-sm font-medium ${location.pathname.includes(page.path) ? "rounded-br-lg border-l-3 border-l-primary bg-secondary" : "border-l-3 border-background"}`}
              >
                <Icon
                  className={`text-xl ${location.pathname.includes(page.path) && "text-primary"}`}
                />{" "}
                {page.name}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
