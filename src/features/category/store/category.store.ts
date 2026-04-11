import { create } from "zustand"

export type CategoryStore = object

const useCategoryStore = create<CategoryStore>(() => ({}))

export default useCategoryStore
