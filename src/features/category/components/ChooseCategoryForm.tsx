import React from "react"
import { Button } from "@/components/ui/button.tsx"
import { categories } from "@/features/category/constants/category.constants.ts"
import useCategoryStore from "@/features/category/store/category.store.ts"
import { AddSquareIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Field, FieldGroup, FieldSet } from "@/components/ui/field.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"

const ChooseCategoryForm: React.FC = () => {
  const categoryStore = useCategoryStore()
  return (
    <div
      className={
        "fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-2xl"
      }
    >
      <div className={"relative bg-secondary p-5"}>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Select Category
        </h4>
        <p className="mb-5 text-muted-foreground">
          Choose a category for this transaction
        </p>
        <FieldGroup className={"mb-2"}>
          <FieldSet>
            <Field orientation={"horizontal"}>
              <Field>
                <Label>Create new category</Label>
                <Input
                  name={"name"}
                  value={categoryStore.categoryFormData.name}
                  onChange={categoryStore.handleCreateNewCategoryFormInputs}
                />
              </Field>
              <Field>
                <Label>Comment</Label>
                <Input
                  name={"comment"}
                  value={categoryStore.categoryFormData.comment}
                  onChange={categoryStore.handleCreateNewCategoryFormInputs}
                />
              </Field>
            </Field>
          </FieldSet>
        </FieldGroup>
        <div className={"grid w-full grid-cols-5 gap-1"}>
          {categories.map((category, index: number) => (
            <Button
              key={index}
              onClick={() => categoryStore.setSelectedCategory(category.name)}
              variant={"ghost"}
              size={"lg"}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <Button
          size={"icon-lg"}
          variant={"ghost"}
          className={"absolute top-0 right-0 p-2"}
        >
          <HugeiconsIcon icon={AddSquareIcon} />
        </Button>
      </div>
    </div>
  )
}

export default ChooseCategoryForm
