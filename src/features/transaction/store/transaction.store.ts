import { create } from "zustand"
import type { ChangeEvent } from "react"

export type TransactionStore = {
  transactionMode: boolean
  transactionFormData: {
    transactionMethod: null | "income" | "expense" | "transfer"
    fromAccount: string
    toAccount: string
    amount: number
    transactionDate: string
    description: string
    paymentReceipt: string
  }
  globalHotKey: (event: { key: string }) => void
  openTransactionForm: () => void
  closeTransactionForm: () => void
  handleTransactionFormInputFields: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  selectTransactionMethod: (method: "income" | "expense" | null) => void
}

const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactionMode: false,
  transactionFormData: {
    transactionMethod: null,
    fromAccount: "",
    toAccount: "",
    amount: 0,
    transactionDate: "",
    description: "",
    paymentReceipt: "",
  },
  globalHotKey: (event): void => {
    switch (event.key) {
      case "F8":
        get().openTransactionForm()
        break
      case "Escape":
        get().closeTransactionForm()
        set((state) => ({
          ...state,
          transactionFormData: {
            transactionMethod: null,
            fromAccount: "",
            toAccount: "",
            amount: 0,
            transactionDate: "",
            description: "",
            paymentReceipt: "",
          },
        }))
    }
  },
  openTransactionForm: () => {
    set((state) => ({
      ...state,
      transactionMode: true,
    }))
  },
  closeTransactionForm: () => {
    set((state) => ({
      ...state,
      transactionMode: false,
    }))
  },
  selectTransactionMethod: (method: "income" | "expense" | null) => {
    set((state) => ({
      ...state,
      transactionFormData: {
        ...state.transactionFormData,
        transactionMethod: method,
      },
    }))
  },
  handleTransactionFormInputFields: (event) => {
    const { name, value } = event.target
    set((state) => ({
      ...state,
      transactionFormData: {
        ...state.transactionFormData,
        [name]: value,
      },
    }))
  },
}))
export default useTransactionStore
