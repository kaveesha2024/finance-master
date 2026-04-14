import React from "react"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field.tsx"
import { Button } from "@/components/ui/button.tsx"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import useCategoryStore from "@/features/category/store/category.store.ts"

const QuickActionsForm: React.FC = () => {
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoryStore()
  return (
    <div>
      <FieldGroup>
        <FieldSet>
          <FieldLegend> Quick Actions</FieldLegend>
          <FieldDescription>Select your transaction</FieldDescription>
          <FieldGroup>
            <Field orientation={"horizontal"}>
              <Field>
                <Button
                  onClick={() => {
                    transactionStore.selectTransactionMethod("expense")
                    categoryStore.handleTransactionForm(true)
                  }}
                >
                  Expense
                </Button>
              </Field>
              <Field>
                <Button
                  onClick={() => {
                    transactionStore.selectTransactionMethod("income")
                    categoryStore.handleTransactionForm(true)
                  }}
                >
                  Income
                </Button>
              </Field>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}

export default QuickActionsForm
