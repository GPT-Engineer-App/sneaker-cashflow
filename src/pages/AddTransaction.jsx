import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AddTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    type: "",
    brand: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch transaction data for editing (mock data for now)
      const mockTransaction = {
        id: 1,
        date: "2023-05-01",
        amount: 200,
        type: "Expense",
        brand: "Nike",
      };
      setTransaction(mockTransaction);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction submitted:", transaction);
    // Here you would typically save the transaction to your state or backend
    navigate("/transactions");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {id ? "Edit Transaction" : "Add New Transaction"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Select
            name="type"
            value={transaction.type}
            onValueChange={(value) => handleSelectChange("type", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Select
            name="brand"
            value={transaction.brand}
            onValueChange={(value) => handleSelectChange("brand", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
              <SelectItem value="Reebok">Reebok</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">{id ? "Update" : "Add"} Transaction</Button>
      </form>
    </div>
  );
};

export default AddTransaction;