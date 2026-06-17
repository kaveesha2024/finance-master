import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Calendar, Landmark, Plus } from "lucide-react"
import React, { useEffect } from "react"
import CreateNewLoanForm from "@/features/loans/components/forms/CreateNewLoanForm.tsx"
import useLoanStore from "@/features/loans/store/loan.store.ts"
import { Button } from "@/components/ui/button.tsx"

const LoansPage: React.FC = () => {
  const loanStore = useLoanStore()
  useEffect(() => {
    window.addEventListener("keydown", loanStore.globalHotKey)
    return () => {
      window.removeEventListener("keydown", loanStore.globalHotKey)
    }
  }, [])
  const activeLoans = [
    {
      id: 1,
      name: "Personal Loan",
      bank: "Commercial Bank",
      remainingAmount: 35000,
      totalAmount: 50000,
      interestRate: "12%",
      nextDueDate: "June 28, 2026",
      monthlyInstallment: 4200,
    },
    {
      id: 2,
      name: "Laptop Installment",
      bank: "Singer Plus",
      remainingAmount: 10000,
      totalAmount: 30000,
      interestRate: "0%",
      nextDueDate: "July 02, 2026",
      monthlyInstallment: 1000,
    },
  ]
  return (
    <>
      <div className="p- w-full space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Total Outstanding Loans
            </p>
            <h1 className="text-2xl font-bold text-destructive">Rs 45,000</h1>
          </div>
          <Button

          onClick={() => loanStore.handleCreateNewLoanFormOpenState(true)}
          >
            <Plus size={16} /> Add New Loan
          </Button>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="border-border shadow-sm">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Landmark size={24} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">
                  Active Accounts
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  {activeLoans.length} Loans Active
                </h3>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="rounded-xl bg-teal-50 p-3 text-[#007A87]">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">
                  Due This Month
                </p>
                <h3 className="text-xl font-bold text-gray-800">Rs 5,200</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed List/Grid Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-800">Loan Details</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {activeLoans.map((loan) => {
              const progressValue =
                ((loan.totalAmount - loan.remainingAmount) / loan.totalAmount) *
                100

              return (
                <Card
                  key={loan.id}
                  className="border-border bg-white shadow-sm"
                >
                  <CardContent className="space-y-4 p-5">
                    {/* Top Row: Icon + Meta */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-gray-700">
                          <Landmark size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800">
                            {loan.name}
                          </h4>
                          <p className="text-xs text-gray-400">{loan.bank}</p>
                        </div>
                      </div>
                      <span className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
                        Rate: {loan.interestRate}
                      </span>
                    </div>

                    {/* Pricing Progress Section */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-gray-500">
                          Repaid: Rs {loan.totalAmount - loan.remainingAmount}
                        </span>
                        <span className="font-bold text-gray-800">
                          Remaining: Rs {loan.remainingAmount}
                        </span>
                      </div>
                      {/* Progress Bar (using standard divs or shadcn Progress component) */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#007A87] transition-all duration-300"
                          style={{ width: `${progressValue}%` }}
                        />
                      </div>
                    </div>

                    {/* Payment Schedule Footer */}
                    <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-xs">
                      <div>
                        <p className="text-gray-400">Next Installment</p>
                        <p className="font-semibold text-gray-700">
                          Rs {loan.monthlyInstallment} ({loan.nextDueDate})
                        </p>
                      </div>
                      <button className="flex items-center gap-0.5 font-medium text-[#007A87] hover:underline">
                        Pay <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      {loanStore.isCreateNewLoanFormOpen && <CreateNewLoanForm />}
    </>
  )
}

export default LoansPage
