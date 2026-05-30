import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { MoreHorizontalIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import { Button } from "@/components/ui/button.tsx"
import useTransactionStore from "@/features/transaction/store/transaction.store.ts"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge.tsx"

const AllTransactionsTable: React.FC = () => {
  const transactionStore = useTransactionStore()
  return (
    <Table className="mt-5 select-none">
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Payment method</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Note</TableHead>
          <TableHead className={"text-right"}>Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionStore.allTransactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell className={"font-medium"}>
              Rs {transaction.amount.toLocaleString()}
            </TableCell>
            <TableCell>
              {transaction.transactionMethod === "expense" ? (
                <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                  Expense
                </Badge>
              ) : (
                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                  Income
                </Badge>
              )}
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.fromAccount}</TableCell>
            <TableCell>
              {format(transaction.transactionDate, "cccccc dd-MM-yyyy")}
            </TableCell>
            <TableCell>
              {format(transaction.transactionDate, "hh:mm aaa")}
            </TableCell>
            <TableCell>{transaction.comment.substring(0, 10)}</TableCell>
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
        ))}
      </TableBody>
    </Table>
  )
}

export default AllTransactionsTable
