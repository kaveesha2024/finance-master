import { create } from "zustand"
import type { Loan } from "@/features/loans/types/loan"

type LoanStore = {
  allLoans: Loan[]
  isCreateNewLoanFormOpen: boolean
  createNewLoanFormData: {
    loanName: string
    provider: string
    toAccount: string | null
    amount: number
    paidAmount: number
    loanCreatedDay: Date
    dueDate: Date
    paymentDate: number
    rate: number
  }
  errorMessage: string | null
  clearCreateNewLoanFormData: () => void
  handleCreateNewLoanFormOpenState: (open: boolean) => void
  setError: (error: string | null) => void
  globalHotKey: (event: { key: string }) => void
}

const useLoanStore = create<LoanStore>((set) => ({
  allLoans: [],
  isCreateNewLoanFormOpen: true,
  createNewLoanFormData: {
    loanName: "",
    provider: "",
    toAccount: null,
    amount: 0,
    paidAmount: 0,
    loanCreatedDay: new Date(),
    dueDate: new Date(),
    paymentDate: 1,
    rate: 0,
  },
  errorMessage: null,
  clearCreateNewLoanFormData: () => {
    set((state) => ({
      ...state,
      createNewLoanFormData: {
        loanName: "",
        provider: "",
        toAccount: null,
        amount: 0,
        paidAmount: 0,
        loanCreatedDay: new Date(),
        dueDate: new Date(),
        paymentDate: 1,
        rate: 0,
      },
    }))
  },
  setError: (error) => {
    set((state) => ({
      ...state,
      errorMessage: error ?? null,
    }))
  },
  handleCreateNewLoanFormOpenState: (open) => {
    set((state) => ({
      ...state,
      isCreateNewLoanFormOpen: open,
    }))
  },
  globalHotKey: (event) => {
    switch (event.key) {
      case "F9":
        set((state) => ({
          ...state,
          isCreateNewLoanFormOpen: true,
        }))
        break
      case "Escape":
        set((state) => ({
          ...state,
          isCreateNewLoanFormOpen: false,
          errorMessage: null,
        }))
        break
      default:
        break
    }
  },
}))

export default useLoanStore
