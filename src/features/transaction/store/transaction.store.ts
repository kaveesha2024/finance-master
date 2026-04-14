import { create } from "zustand"
import type { ChangeEvent } from "react"
import {
  getAccounts,
  setAccounts,
} from "@/features/accounts/services/account.service.ts"

export type TransactionStore = {
  transactionMode: boolean
  errorMessage: string | null
  transactionFormData: {
    transactionMethod: null | "income" | "expense" | "transfer"
    fromAccount: string
    toAccount: string
    amount: number
    transactionDate: string
    description: string
    paymentReceipt: string
  }
  setError: (error: string | null) => void
  globalHotKey: (event: { key: string }) => void
  openTransactionForm: () => void
  closeTransactionForm: () => void
  handleTransactionFormInputFields: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleTransactionFormSelectFields: (event: string | null) => void
  selectTransactionMethod: (method: "income" | "expense" | null) => void
  createTransaction: (transactionDate: Date | undefined) => void
}

const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactionMode: false,
  errorMessage: null,
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
  setError: (errorMessage) => {
    set((state) => ({
      ...state,
      errorMessage,
    }))
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
        [name]: name === "amount" ? Number(value) : value,
      },
    }))
  },
  handleTransactionFormSelectFields: (event) => {
    set((state) => ({
      ...state,
      transactionFormData: {
        ...state.transactionFormData,
        fromAccount: event ?? "",
      },
    }))
  },
  createTransaction: (transactionDate) => {
    const transactionFormData = get().transactionFormData
    if (transactionDate === undefined) {
      set((state) => ({
        ...state,
        transactionFormData: {
          ...state.transactionFormData,
          transactionDate: Date(),
        },
      }))
    }
    switch (transactionFormData.transactionMethod) {
      case "income": {
        const accounts = getAccounts()
        const existingAccountIndex = accounts.findIndex(
          (account) => account.id === transactionFormData.fromAccount
        )
        if (existingAccountIndex !== -1) {
          accounts[existingAccountIndex].amount += transactionFormData.amount
          setAccounts(accounts)
          set((state) => ({
            ...state,
            transactionMode: false,
          }))
        } else {
          get().setError("Account does not exists")
        }
        break
      }
      case "expense": {
        const accounts = getAccounts()
        const existingAccountIndex = accounts.findIndex(
          (account) => account.id === transactionFormData.fromAccount
        )
        if (existingAccountIndex !== -1) {
          accounts[existingAccountIndex].amount -= transactionFormData.amount
          setAccounts(accounts)
        } else {
          get().setError("Account does not exists")
        }
        break
      }
    }
    location.reload()
  },
}))
export default useTransactionStore
