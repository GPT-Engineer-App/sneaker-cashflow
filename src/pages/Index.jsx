import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-6">Sneaker Accounting App</h1>
      <p className="text-xl mb-8">Track your sneaker side-hustle transactions</p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/transactions">View Transactions</Link>
        </Button>
        <Button asChild>
          <Link to="/add-transaction">Add New Transaction</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;