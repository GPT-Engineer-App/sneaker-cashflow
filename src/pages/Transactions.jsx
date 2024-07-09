import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2023-05-01", amount: 200, type: "Expense", brand: "Nike" },
    { id: 2, date: "2023-05-15", amount: 300, type: "Income", brand: "Adidas" },
    { id: 3, date: "2023-06-01", amount: 150, type: "Expense", brand: "Puma" },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.brand}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link to={`/edit-transaction/${transaction.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;