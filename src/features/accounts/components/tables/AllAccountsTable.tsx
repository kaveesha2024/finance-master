import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { MoreHorizontalIcon, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import useAccountStore from "@/features/accounts/store/account.store.ts"
import type { Account } from "@/features/accounts/type/account"

const AllAccountsTable: React.FC = () => {
  const accountStore = useAccountStore()
  return (
    <Table className={"mt-5 w-[75%]"}>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Account Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className={"text-right"}>Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accountStore.allAccounts.length <= 0 ? (
          <TableRow>
            <TableCell></TableCell>
            <TableCell>No accounts </TableCell>
          </TableRow>
        ) : (
          accountStore.allAccounts.map((account: Account, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <Wallet />
              </TableCell>
              <TableCell className={"font-medium"}>{account.name}</TableCell>
              <TableCell>Rs {account.amount.toLocaleString()}</TableCell>
              <TableCell className={"text-right"}>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    }
                  />
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default AllAccountsTable
