import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [getTitle, setTitleFunction] = useState("");
  const [getAmount, setAmountFunction] = useState("");
  const [getDate, setDateFunction] = useState("");

  const [FormFlag,setFormFlag] = useState(0);

  const getTitleHandler = (e) => {
    //console.log(e.target.value);
    setTitleFunction(e.target.value);
  };

  const getAmountHandler = (e) => {
    //console.log(e.target.value);
    setAmountFunction(e.target.value);
  };

  const getDateHandler = (e) => {
    //console.log(e.target.value);
    setDateFunction(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newExpenseDate = {
      Name: getTitle,
      Value: getAmount,
      Date: new Date(getDate),
      Id: Math.random()
    };

    // console.log(getTitle);
    // console.log(getAmount);
    // console.log(getDate);
    props.getNewExpense(newExpenseDate);
    setTitleFunction('');
  setAmountFunction('');
  setDateFunction('');
  setFormFlag(0);
  };

  const showFormHandler = () => {
    setFormFlag(1);
  }
  const hideFormFlag = () => {
    setFormFlag(0);
  }

  if(FormFlag === 0){
    return (
      <div className="bg-[#a892ee] p-4 mt-8 mb-8 mx-auto w-[50rem] mx-w-[95%] rounded-xl text-center shadow-[0_1px_8px_rgba(0,0,0,0,25)]">
        <button
          type="button"
          className="font-inherit cursor-pointer py-4 px-8 border border-[#40005d] text-white rounded-xl mr-4 bg-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674]"
          onClick={showFormHandler}
        >
          Add Expense
        </button>      
      </div>
    );
  }

  return (
    <div className="bg-[#a892ee] p-4 mt-8 mb-8 mx-auto w-[50rem] mx-w-[95%] rounded-xl text-center shadow-[0_1px_8px_rgba(0,0,0,0,25)]">
      <form onSubmit={formSubmitHandler}>
        <div className="flex flex-wrap gap-px mb-4 text-left">
          <div>
            <label className="font-bold mb-2 block">Title</label>
            <input
              className="font-inherit p-2 rounded-md border border-[#ccc]"
              onChange={getTitleHandler}
              type="text"
              name="title"
              value={getTitle}
            />
          </div>
          <div>
            <label className="font-bold mb-2 block">Amount</label>
            <input
              className="font-inherit p-2 rounded-md border-[#ccc]"
              onChange={getAmountHandler}
              type="number"
              name="amount"
              value={getAmount}
            />
          </div>
          <div>
            <label className="font-bold mb-2 block">Date</label>
            <input
              className="font-inherit p-2 rounded-md border-[#ccc]"
              onChange={getDateHandler}
              type="date"
              name="date"
              value={getDate}
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="font-inherit cursor-pointer py-4 px-8 border border-[#40005d] text-white rounded-xl mr-4 bg-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674]"
            onClick={hideFormFlag}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-inherit cursor-pointer py-4 px-8 border border-[#40005d] text-white rounded-xl mr-4 bg-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674]"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
