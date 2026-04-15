import React from "react"
import { Route, Routes } from "react-router-dom"
// import Overview from "@/pages/overview/Overview.tsx"
import Home from "@/pages/home/Home.tsx"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
