import React from "react"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import QuickActionsForm from "@/features/transaction/components/QuickActionsForm.tsx"
import useCategoryStore from "@/features/category/store/category.store.ts"

const TransactionForm: React.FC = () => {
  const [date, setDate] = React.useState<Date>()
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoryStore()
  return (
    <div className={"fixed top-0 left-0 h-full w-full backdrop-blur-2xl"}>
      <div
        className={"l-[10rem] flex h-full w-full items-center justify-center"}
      >
        <div className={"w-[500px] bg-secondary p-5"}>
          {transactionStore.transactionFormData.transactionMethod !== null ? (
            <FieldGroup>
              <FieldSet>
                <FieldLegend>
                  Create transaction | Category ={" "}
                  {categoryStore.selectedCategory}
                </FieldLegend>
                <FieldDescription>
                  All transactions are secured
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="amount">Transaction amount</FieldLabel>
                    <Input
                      name={"amount"}
                      id={"amount"}
                      autoFocus={true}
                      type={"number"}
                      min={0}
                    />
                  </Field>
                  <Field className={"mt-3"}>
                    <FieldLabel htmlFor={"account"}>Select account</FieldLabel>
                    <Select id={"account"}>
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
                  <Field>
                    <Popover>
                      <PopoverTrigger
                        render={
                          <Button
                            variant={"outline"}
                            data-empty={!date}
                            className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                          >
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick the transaction date</span>
                            )}
                            {/*<ChevronDownIcon data-icon="inline-end" />*/}
                          </Button>
                        }
                      />
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          defaultMonth={date}
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="textarea-message">Details</FieldLabel>
                    <FieldDescription>
                      Enter your details about this transaction
                    </FieldDescription>
                    <Textarea
                      id="textarea-message"
                      placeholder="Type your comment here."
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor={"paymentReceipt"}>
                      Payment receipt
                    </FieldLabel>
                    <Input type={"file"} id={"paymentReceipt"} />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Field>
                      <Button
                        onClick={() =>
                          transactionStore.selectTransactionMethod(null)
                        }
                        className={"mt-3 w-full"}
                      >
                        Back
                      </Button>{" "}
                    </Field>{" "}
                    <Field>
                      <Button className={"mt-3 w-full"}>Confirm</Button>{" "}
                    </Field>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          ) : (
            <QuickActionsForm />
          )}
        </div>
      </div>
    </div>
  )
}

export default TransactionForm
