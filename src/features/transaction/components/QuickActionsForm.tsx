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

const QuickActionsForm: React.FC = () => {
  const transactionStore = useTransactionStore()
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
                  }}
                >
                  Expense
                </Button>
              </Field>
              <Field>
                <Button
                  onClick={() => {
                    transactionStore.selectTransactionMethod("income")
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
