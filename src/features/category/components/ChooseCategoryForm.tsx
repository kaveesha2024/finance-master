import React, { useEffect } from "react"
import { Button } from "@/components/ui/button.tsx"
import useCategoryStore from "@/features/category/store/category.store.ts"
import { AddSquareIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Field, FieldGroup, FieldSet } from "@/components/ui/field.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"

const ChooseCategoryForm: React.FC = () => {
  const categoryStore = useCategoryStore()
  useEffect(() => {
    categoryStore.getAllCategories()
  }, [])
  return (
    <div
      className={
        "fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-2xl"
      }
    >
      <div className={"relative bg-background p-5"}>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Select Category
        </h4>
        <p className="text-muted-foreground">
          Choose a category for this transaction
        </p>
        {categoryStore.errorMessage && (
          <small className="my-5 text-sm leading-none font-medium text-destructive">
            {categoryStore.errorMessage}
          </small>
        )}
        <FieldGroup className={"mb-2"}>
          <FieldSet>
            <Field></Field>
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
          {categoryStore.allCategories.map((category, index: number) => (
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
          onClick={categoryStore.createNewCategory}
        >
          <HugeiconsIcon icon={AddSquareIcon} />
        </Button>
      </div>
    </div>
  )
}

export default ChooseCategoryForm
