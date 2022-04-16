import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./EventFilter";
const ExpenseList = (props) => {
  console.log(props);
  const [selectedYear, selectYear] = useState("2020");

  const filteredYear = (fYear) => {
    // console.log("IN Elist "+fYear);
    selectYear(fYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    //console.log(expense.Date.getFullYear().toString());
    return expense.Date.getFullYear().toString() === selectedYear;
  });
  //console.log(filteredExpenses);

  let expenseItems = <p className="text-center text-white">No Data Found !</p>;

  if (filteredExpenses.length > 0) {
    expenseItems = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.Id} items={expense} />
    ));
  }

  return (
    <div>
      <Card className="p-4 bg-gray-800 mb-8 m-auto w-2/4 max-w-[95%]">
        <ExpenseFilter selected={selectedYear} onChangeYear={filteredYear} />
        {/* {props.expenses.map((expense) => (<ExpenseItem key={expense.Id} items={expense} />))} */}
        {/* {if(filteredExpenses.length > 0){ return (
                    <h2>No Data Found !</h2>
                )               }} */}
        {expenseItems}
      </Card>
    </div>
  );
};
export default ExpenseList;
