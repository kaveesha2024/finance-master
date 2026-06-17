import React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx"
import useLoanStore from "@/features/loans/store/loan.store.ts"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx"
import { Button } from "@/components/ui/button.tsx"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar.tsx"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx"
import { loanPaymentDates } from "@/constants/loan.payment.dates.ts"

const CreateNewLoanForm: React.FC = () => {
  const loanStore = useLoanStore()
  const [date, setDate] = React.useState<Date>()
  return (
    <Dialog
      open={loanStore.isCreateNewLoanFormOpen}
      onOpenChange={(open) => {
        console.log(open)
        loanStore.handleCreateNewLoanFormOpenState(open)
      }}
    >
      <DialogContent
        className={
          "gap-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:max-w-[480px]"
        }
      >
        <DialogHeader>
          <DialogTitle>Create new loan</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Separator className={"my-3"} />
        <form className={"mb-5"}>
          <p className={"my-3 text-xs text-destructive"}>Error</p>
          <FieldGroup>
            <FieldSet>
              <FieldGroup className={"grid grid-cols-2"}>
                <Field>
                  <FieldLabel>Loan name</FieldLabel>
                  <Input placeholder={"e.g. Car loan"} />
                </Field>
                <Field>
                  <FieldLabel>Provider / Lender</FieldLabel>
                  <Input placeholder={"e.g. HNB, Commercial Bank"} />
                </Field>
              </FieldGroup>
              <FieldGroup className={"grid grid-cols-2"}>
                <Field>
                  <FieldLabel>Amount</FieldLabel>
                  <Input placeholder={"e.g. Car loan"} />
                </Field>
                <Field>
                  <FieldLabel>Paid amount</FieldLabel>
                  <Input placeholder={"e.g. HNB, Commercial Bank"} />
                </Field>
              </FieldGroup>
              <FieldGroup className={"grid grid-cols-2"}>
                <Field>
                  <FieldLabel>Loan created date</FieldLabel>
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
                  <FieldLabel>Due date</FieldLabel>
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
              </FieldGroup>
              <FieldGroup className={"grid grid-cols-2"}>
                <Field>
                  <FieldLabel>Payment date</FieldLabel>
                  <Select items={loanPaymentDates}>
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {loanPaymentDates.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>Interrest rate (annual)</FieldLabel>
                  <Input placeholder={"e.g. 12.5%"} />
                </Field>
              </FieldGroup>
              <FieldGroup className={"grid grid-cols-2"}>
                <Field>
                  <FieldLabel>Select account</FieldLabel>
                  <Select items={loanPaymentDates}>
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {loanPaymentDates.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button type="submit">Create loan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewLoanForm
