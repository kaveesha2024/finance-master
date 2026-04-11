import { create } from "zustand"

export type TransactionStore = {
  transactionMode: boolean
  transactionFormData: {
    transactionMethod: null | "income" | "expense" | "transfer"
    firstSelectedAccount: string
    secondSelectedAccount: string
    amount: number
    transactionDate: string
    description: string
    paymentReceipt: string
  }
  globalHotKey: (event: { key: string }) => void
  openTransactionForm: () => void
  closeTransactionForm: () => void
  selectTransactionMethod: (method: "income" | "expense" | null) => void
}

const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactionMode: false,
  transactionFormData: {
    transactionMethod: null,
    firstSelectedAccount: "",
    secondSelectedAccount: "",
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
}))
export default useTransactionStore
