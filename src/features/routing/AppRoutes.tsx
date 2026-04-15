import React from "react"
import { Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout.tsx"
import Home from "@/pages/home/Home.tsx"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<Home />} />
      </Route>
      {/*<Route path={"/"} element={<Overview />} />*/}
    </Routes>
  )
}

export default AppRoutes
