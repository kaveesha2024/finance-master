// import { Card, CardContent } from '@/components/ui/card'
// import { Landmark } from 'lucide-react'
// import React from 'react'

// const LoanCard: React.FC = () => {
//     return (
//         <Card className="shadow-sm border-border bg-white">
//             <CardContent className="p-5 space-y-4">
//                 {/* Top Row: Icon + Meta */}
//                 <div className="flex justify-between items-start">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 text-gray-700">
//                             <Landmark size={20} />
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-gray-800 text-sm">{name}</h4>
//                             <p className="text-xs text-gray-400">{payFrom}</p>
//                         </div>
//                     </div>
//                     <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
//                         Rate: {interestRate}
//                     </span>
//                 </div>

//                 {/* Pricing Progress Section */}
//                 <div className="space-y-1.5">
//                     <div className="flex justify-between text-xs font-medium">
//                         <span className="text-gray-500">Repaid: Rs {loan.totalAmount - loan.remainingAmount}</span>
//                         <span className="text-gray-800 font-bold">Remaining: Rs {loan.remainingAmount}</span>
//                     </div>
//                     {/* Progress Bar (using standard divs or shadcn Progress component) */}
//                     <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
//                         <div
//                             className="bg-[#007A87] h-full rounded-full transition-all duration-300"
//                             style={{ width: `${progressValue}%` }}
//                         />
//                     </div>
//                 </div>

//                 {/* Payment Schedule Footer */}
//                 <div className="pt-3 border-t border-gray-50 flex justify-between items-center text-xs">
//                     <div>
//                         <p className="text-gray-400">Next Installment</p>
//                         <p className="font-semibold text-gray-700">Rs {loan.monthlyInstallment} ({loan.nextDueDate})</p>
//                     </div>
//                     <button className="text-[#007A87] hover:underline flex items-center gap-0.5 font-medium">
//                         Pay <ArrowUpRight size={14} />
//                     </button>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }

// export default LoanCard