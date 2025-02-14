import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Withdrawal = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="p-2 text-3xl font-semibold">Withdrawal History</h1>
      <Table>
        <TableHeader>
          <TableRow>
            
            <TableHead>Date & Time</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            
            <TableHead>Status</TableHead>

            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              
              <TableCell>
                <span className="flex flex-wrap w-2">24/01/2025 6:00 pm</span>
              </TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>95000</TableCell>
              <TableCell>Buy</TableCell>
              <TableCell className="text-right">Success</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Withdrawal