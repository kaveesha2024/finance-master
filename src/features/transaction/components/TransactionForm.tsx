import React from "react"
import Header from "@/components/ui/header.tsx"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx"

const TransactionForm: React.FC = () => {
  return (
    <div className={"fixed top-0 left-0 h-full w-full backdrop-blur-2xl"}>
      <div
        className={"ml-[10rem] flex h-full w-full items-center justify-center"}
      >
        <div className={"bg-secondary p-5"}>
          <Header text={"Create transaction"} />
          <Field>
            <FieldLabel>Amount</FieldLabel>
            <Input name={"amount"} />
            <FieldDescription>Transaction amount</FieldDescription>
          </Field>
          <Field>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={"Select account"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"apple"}>Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>
    </div>
  )
}

export default TransactionForm
