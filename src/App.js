import React,{useState} from "react";
import ExpenseList from "./Expenses/ExpenseList";
import ExpenseForm from "./AddExpenses/ExpenseForm";
const EXPENSES = [
  {
    Id : "E1",
    Name: "FOOD",
    Date: new Date(2021, 1, 1),
    Value: 1000,
  },
  {
    Id : "E2",
    Name: "Car Insurance",
    Date: new Date(2020, 1, 5),
    Value: 200,
  },
  {
    Id : "E3",
    Name: "Room Rent",
    Date: new Date(2021, 1, 10),
    Value: 500,
  },
  {
    Id : "E4",
    Name: "Grosseries",
    Date: new Date(2022, 1, 2),
    Value: 500,
  },
  {
    Id : "E5",
    Name: "Bills",
    Date: new Date(2020, 1, 15),
    Value: 300,
  },
];

function App() {

  const [allExpenses,addExpenses] = useState(EXPENSES);

  const addExpenseHandler = (newExpense) => {
      console.log(newExpense);
      addExpenses((prevExpenses) => {
        return [newExpense,...prevExpenses];        
      })
  }

  return (
    <div className="App">
      <ExpenseForm getNewExpense = {addExpenseHandler} />
      <ExpenseList expenses={allExpenses} />
    </div>
  );
}

export default App;
