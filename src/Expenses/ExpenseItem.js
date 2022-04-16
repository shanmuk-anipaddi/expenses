import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props)=> {
   // console.log(props.items);
    return(
        <Card key={props.items.Id} className="flex justify-between items-center px-2 m-4 bg-[#4b4b4b]">
            <ExpenseDate dateItem ={props.items.Date} />
           
            <div className="flex flex-col gap-4 items-end flex-col-reverse justify-start flex-1">
            <h2 className="text-base flex-1 ml-4 mb-0 text-white">{props.items.Name}</h2>
            <div className="text-base font-bold text-white bg-[#40005d] border border-white-200 p-2 rounded-xl md:min-w-580">${props.items.Value}</div>
            </div>
        </Card>
    );

}

export default ExpenseItem;