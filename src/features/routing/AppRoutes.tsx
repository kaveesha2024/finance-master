import React from "react"
import { Route, Routes } from "react-router-dom"
import Overview from "@/pages/overview/Overview.tsx"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Overview />} />
    </Routes>
  )
}

export default AppRoutes
