import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Calendar, Landmark, Plus } from "lucide-react";
import React from "react"

const LoansPage: React.FC = () => {
  const activeLoans = [
    {
      id: 1,
      name: "Personal Loan",
      bank: "Commercial Bank",
      remainingAmount: 35000,
      totalAmount: 50000,
      interestRate: "12%",
      nextDueDate: "June 28, 2026",
      monthlyInstallment: 4200
    },
    {
      id: 2,
      name: "Laptop Installment",
      bank: "Singer Plus",
      remainingAmount: 10000,
      totalAmount: 30000,
      interestRate: "0%",
      nextDueDate: "July 02, 2026",
      monthlyInstallment: 1000
    }
  ];

  return (
    <div className="p- space-y-6 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 font-medium">Total Outstanding Loans</p>
          <h1 className="text-2xl font-bold text-destructive">Rs 45,000</h1>
        </div>
        <button className="flex items-center gap-2 bg-[#007A87] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00626c] transition-all">
          <Plus size={16} /> Add New Loan
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-sm border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <Landmark size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Active Accounts</p>
              <h3 className="text-xl font-bold text-gray-800">{activeLoans.length} Loans Active</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-[#007A87] rounded-xl">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Due This Month</p>
              <h3 className="text-xl font-bold text-gray-800">Rs 5,200</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed List/Grid Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Loan Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeLoans.map((loan) => {
            const progressValue = ((loan.totalAmount - loan.remainingAmount) / loan.totalAmount) * 100;

            return (
              <Card key={loan.id} className="shadow-sm border-border bg-white">
                <CardContent className="p-5 space-y-4">
                  {/* Top Row: Icon + Meta */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 text-gray-700">
                        <Landmark size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{loan.name}</h4>
                        <p className="text-xs text-gray-400">{loan.bank}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      Rate: {loan.interestRate}
                    </span>
                  </div>

                  {/* Pricing Progress Section */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-gray-500">Repaid: Rs {loan.totalAmount - loan.remainingAmount}</span>
                      <span className="text-gray-800 font-bold">Remaining: Rs {loan.remainingAmount}</span>
                    </div>
                    {/* Progress Bar (using standard divs or shadcn Progress component) */}
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#007A87] h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressValue}%` }}
                      />
                    </div>
                  </div>

                  {/* Payment Schedule Footer */}
                  <div className="pt-3 border-t border-gray-50 flex justify-between items-center text-xs">
                    <div>
                      <p className="text-gray-400">Next Installment</p>
                      <p className="font-semibold text-gray-700">Rs {loan.monthlyInstallment} ({loan.nextDueDate})</p>
                    </div>
                    <button className="text-[#007A87] hover:underline flex items-center gap-0.5 font-medium">
                      Pay <ArrowUpRight size={14} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>)
}

export default LoansPage
