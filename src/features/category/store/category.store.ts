import { create } from "zustand"
import type { ChangeEvent } from "react"

export type CategoryStore = {
  isCategoryFormOpen: boolean
  selectedCategory: string | null
  errorMessage: string | null
  categoryFormData: {
    name: string
    comment: string
  }
  handleCreateNewCategoryFormInputs: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  globalHotKey: (event: { key: string }) => void
  handleTransactionForm: (open: boolean) => void
  setSelectedCategory: (selectedCategory: string) => void
  createNewCategory: () => void
  setErrorMessage: (message: string) => void
}

const useCategoryStore = create<CategoryStore>((set, get) => ({
  isCategoryFormOpen: false,
  selectedCategory: null,
  errorMessage: null,
  categoryFormData: {
    name: "",
    comment: "",
  },
  globalHotKey: (event) => {
    switch (event.key) {
      case "+":
        set((state) => ({
          ...state,
          isCategoryFormOpen: true,
        }))
        break
      case "Escape":
        set((state) => ({
          ...state,
          isCategoryFormOpen: false,
          selectedCategory: null,
        }))
        break
    }
  },
  setErrorMessage: (error) => {
    set((state) => ({
      ...state,
      errorMessage: error,
    }))
  },
  handleCreateNewCategoryFormInputs: (event) => {
    const { name, value } = event.target
    set((state) => ({
      ...state,
      categoryFormData: {
        ...state.categoryFormData,
        [name]: value,
      },
    }))
  },
  createNewCategory: () => {
    const categoryFormData = get().categoryFormData
    if (!categoryFormData.name || !categoryFormData.comment) {
      get().setErrorMessage("Fill all the inputs to create new category")
      return
    }
    // todo create new category if name doesn't exists...
  },
  handleTransactionForm: (open) =>
    set((state) => ({
      ...state,
      isCategoryFormOpen: open,
    })),
  setSelectedCategory: (selectedCategory) => {
    set((state) => ({
      ...state,
      selectedCategory,
    }))
  },
}))

export default useCategoryStore
