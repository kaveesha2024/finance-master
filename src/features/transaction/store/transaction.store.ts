import { create } from "zustand"
import type { ChangeEvent } from "react"
import type { Transaction } from "@/features/transaction/type/transaction"
import {
  createTransaction,
  getAllTransactions,
} from "@/features/transaction/service/dexie/transaction.service.ts"
import {
  getAllAccounts,
  setAccounts,
} from "@/features/accounts/services/account.daxie.service.ts"
import useAccountStore from "@/features/accounts/store/account.store.ts"

export type TransactionStore = {
  allTransactions: Transaction[]
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
  createTransaction: (
    transactionDate: Date | undefined,
    categoryName: string | null
  ) => void
  escape: () => void
  getAllTransactions: () => void
}

const useTransactionStore = create<TransactionStore>((set, get) => ({
  allTransactions: [],
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
        get().escape()
    }
  },
  escape: () => {
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
  createTransaction: async (transactionDate, categoryName) => {
    const { transactionFormData, setError } = get()
    if (transactionDate === undefined) {
      set((state) => ({
        ...state,
        transactionFormData: {
          ...state.transactionFormData,
          transactionDate: Date(),
        },
      }))
    }

    // if (transactionFormData.transactionMethod === "income") {
    //   if (transactionFormData.fromAccount === "") {
    //     setError("Select the account to create the transaction INCOME")
    //     return
    //   }
    // } else if (transactionFormData.transactionMethod === "expense") {
    //   if (transactionFormData.fromAccount === "") {
    //     setError("Select the account to create the transaction EXPENSE")
    //     return
    //   }
    // } else {
    //   if (
    //     transactionFormData.fromAccount === "" ||
    //     transactionFormData.toAccount === ""
    //   ) {
    //     setError("Select the accounts to create the transaction TRANSFER")
    //     return
    //   }
    // }

    if (transactionFormData.fromAccount === "") {
      setError("Select the account to create the transaction.")
      return
    }

    await createTransaction({
      transactionMethod: transactionFormData.transactionMethod,
      amount: transactionFormData.amount,
      category: categoryName ?? "",
      fromAccount: transactionFormData.fromAccount,
      toAccount: transactionFormData.toAccount,
      transactionFee: 0,
      comment: transactionFormData.description,
    })
    switch (transactionFormData.transactionMethod) {
      case "income": {
        const accounts = await getAllAccounts()
        const existingAccountIndex = accounts.findIndex(
          (account) => account.name === transactionFormData.fromAccount
        )
        if (existingAccountIndex !== -1) {
          accounts[existingAccountIndex].amount += transactionFormData.amount
          await setAccounts(accounts)
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
        const accounts = await getAllAccounts()
        const existingAccountIndex = accounts.findIndex(
          (account) => account.name === transactionFormData.fromAccount
        )
        if (existingAccountIndex !== -1) {
          accounts[existingAccountIndex].amount -= transactionFormData.amount
          await setAccounts(accounts)
        } else {
          get().setError("Account does not exists")
        }
        break
      }
      default:
        break
    }
    get().getAllTransactions()
    await useAccountStore.getState().getAllAccounts()
    await useAccountStore.getState().getOverallBalance()
    get().escape()
  },
  getAllTransactions: async () => {
    const allTransactions = await getAllTransactions()
    set((state) => ({
      ...state,
      allTransactions,
    }))
  },
}))
export default useTransactionStore
