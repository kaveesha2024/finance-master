import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout.tsx"
import Home from "@/pages/home/Home.tsx"
import LoansPage from "@/features/loans/pages/LoansPage.tsx"
import TransactionPage from "@/features/transaction/pages/TransactionPage.tsx"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/*"} element={<Navigate to="/home" />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/loans"} element={<LoansPage />} />
        <Route path={"/transactions"} element={<TransactionPage />} />
      </Route>
      {/*<Route path={"/"} element={<Overview />} />*/}
    </Routes>
  )
}

export default AppRoutes
