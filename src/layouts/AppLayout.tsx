import React from "react"
import AppSidebar from "@/layouts/components/AppSidebar.tsx"
import { Outlet } from "react-router-dom"
import AppHeader from "@/layouts/components/AppHeader.tsx"

const AppLayout: React.FC = () => {
  return (
    <div
      className={
        "font-poppins grid max-h-screen min-h-screen w-full grid-cols-6 grid-rows-1"
      }
    >
      <AppSidebar />
      <div className="col-span-5 h-full w-full bg-muted">
        <AppHeader />
        <div className="h-[calc(100vh-80px)] w-full overflow-auto p-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
