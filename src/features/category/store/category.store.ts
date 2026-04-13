import { create } from "zustand"
import type { ChangeEvent } from "react"
import {
  addCategory,
  getCategories,
} from "@/features/category/services/category.service.ts"
import { toast } from "sonner"
import type { Category } from "@/features/category/type/category"

export type CategoryStore = {
  isCategoryFormOpen: boolean
  selectedCategory: string | null
  errorMessage: string | null
  allCategories: Category[]
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
  setErrorMessage: (message: string | null) => void
  createNewCategory: () => void
  getAllCategories: () => void
}

const useCategoryStore = create<CategoryStore>((set, get) => ({
  isCategoryFormOpen: false,
  selectedCategory: null,
  errorMessage: null,
  allCategories: [],
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
    get().setErrorMessage(null)
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
    const categories = getCategories()
    const existingCategory = categories.find(
      (category) => category.name === categoryFormData.name
    )
    if (!existingCategory) {
      addCategory(get().categoryFormData)
      get().getAllCategories()
      toast.success("Category added successfully.")
      return
    } else {
      get().setErrorMessage("This category already exists")
      return
    }
  },
  handleTransactionForm: (open) => {
    set((state) => ({
      ...state,
      isCategoryFormOpen: open,
    }))
  },
  setSelectedCategory: (selectedCategory) => {
    set((state) => ({
      ...state,
      selectedCategory,
    }))
  },
  getAllCategories: () => {
    const allCategories = getCategories()
    set((state) => ({
      ...state,
      allCategories,
    }))
  },
}))

export default useCategoryStore
