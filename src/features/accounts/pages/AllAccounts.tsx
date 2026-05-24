import React from "react"
import AllAccountsCard from "@/features/accounts/components/AllAccountsCard.tsx"
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

const AllAccounts: React.FC = () => {
  return (
    <div className={"h-full w-full"}>
      <AllAccountsCard />
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
          <TableRow>
            <TableCell>
              <Wallet />
            </TableCell>
            <TableCell className={"font-medium"}>HNB</TableCell>
            <TableCell>Rs {(1250).toLocaleString()}</TableCell>
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
        </TableBody>
      </Table>
    </div>
  )
}

export default AllAccounts
