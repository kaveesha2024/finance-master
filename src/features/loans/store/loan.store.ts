import { create } from "zustand";
import type { Loan } from "../types/loan";

type LoanStore = {
    allLoans: Loan[];
    createNewLoanFormData: {
        loanName: string,
        fromWhome: string,
        toAccount: string | null,
        amount: number;
        paidAmount: number;
        loanCreatedDay: Date,
        dueDate: Date,
        paymentDate: number;
        rate: number;
    };
    errorMessage: string | null;
    clearCreateNewLoanFormData: () => void;
    setError: (error: string | null
    ) => void;
}

const useLoanStore = create<LoanStore>((set) => ({
    allLoans: [],
    createNewLoanFormData: {
        loanName: "",
        fromWhome: "",
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
                fromWhome: "",
                toAccount: null,
                amount: 0,
                paidAmount: 0,
                loanCreatedDay: new Date(),
                dueDate: new Date(),
                paymentDate: 1,
                rate: 0,
            },
        }));
    },
    setError: (error) => {
        set((state) => ({
            ...state,
            errorMessage: error ?? null,
        }));
    },
}));

export default useLoanStore;