import { create } from "zustand"

export type CategoryStore = {
  isCategoryFormOpen: boolean
  selectedCategory: string | null
  globalHotKey: (event: { key: string }) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
  isCategoryFormOpen: true,
  selectedCategory: null,
  globalHotKey: (event) => {
    switch (event.key) {
      case "F7":
        set((state) => ({
          ...state,
          isCategoryFormOpen: true,
        }))
        break
    }
  },
}))

export default useCategoryStore
