import React from "react"
import { Button } from "@/components/ui/button.tsx"
import { categories } from "@/features/category/constants/category.constants.ts"

const ChooseCategoryForm: React.FC = () => {
  return (
    <div
      className={
        "fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-2xl"
      }
    >
      <div className={"bg-secondary p-5"}>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Select Category
        </h4>
        <p className="mb-5 text-muted-foreground">
          Choose a category for this transaction
        </p>
        <div className={"grid w-full grid-cols-5 grid-rows-5 gap-1"}>
          {categories.map((category) => (
            <Button variant={"ghost"} size={"lg"}>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseCategoryForm
