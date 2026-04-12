import type { Category } from "@/features/category/type/category"

export const getCategories = (): Category[] => {
  const categories = localStorage.getItem("categories")
  if (!categories) {
    return []
  }
  return JSON.parse(categories)
}
export const setCategories = (categories: Category[]): boolean => {
  localStorage.setItem("categories", JSON.stringify(categories))
  return true
}
export const addCategory = (category: Category): boolean => {
  const categories = getCategories()
  categories.push(category)
  setCategories(categories)
  return true
}
export const deleteCategory = (name: string): boolean => {
  const categories = getCategories()
  const newCategories = categories.filter((category) => category.name !== name)
  setCategories(newCategories)
  return true
}
export const getCategoryById = () => {}
