import React from "react"
import Header from "@/components/ui/header.tsx"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Button } from "@/components/ui/button.tsx"
import useAccountStore from "@/features/accounts/store/account.store.ts"

const CreateNewAccountForm: React.FC = () => {
  const accountStore = useAccountStore()
  return (
    <div className={"fixed top-0 left-0 h-full w-full backdrop-blur-2xl"}>
      <div
        className={"ml-[10rem] flex h-full w-full items-center justify-center"}
      >
        <div className={"rounded-[20px] bg-secondary p-5"}>
          <Header text={"Create New Account"} />
          {accountStore.errorMessage && (
            <div className={"mb-2 text-sm text-destructive"}>
              {accountStore.errorMessage}
            </div>
          )}
          <Field orientation={"vertical"}>
            <Field className={"mb-5"}>
              <FieldLabel htmlFor={"name"}>Name</FieldLabel>
              <Input
                name={"name"}
                onChange={accountStore.handleCreateNewAccountFormInputs}
                autoFocus={true}
              />
              <FieldDescription>
                Give the name for your new account
              </FieldDescription>
            </Field>
            <Field className={"mb-5"}>
              <FieldLabel htmlFor={"balance"}>Initial Balance</FieldLabel>
              <Input
                name={"balance"}
                onChange={accountStore.handleCreateNewAccountFormInputs}
                type={"number"}
                min={0}
              />
              <FieldDescription>
                Give the initial balance for your new account
              </FieldDescription>
            </Field>
          </Field>
          <div className="mb-2 font-mono text-xs text-muted-foreground">
            (Press <kbd>Enter</kbd> to create)
          </div>
          <Button className={"w-full"} onClick={accountStore.createNewAccount}>
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateNewAccountForm
