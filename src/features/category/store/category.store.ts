import { create } from "zustand"

export type CategoryStore = {
  isCategoryFormOpen: boolean
  selectedCategory: string | null
  globalHotKey: (event: { key: string }) => void
  handleTransactionForm: (open: boolean) => void
  setSelectedCategory: (selectedCategory: string) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
  isCategoryFormOpen: false,
  selectedCategory: null,
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
