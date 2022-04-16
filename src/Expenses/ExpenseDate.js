import React from "react";

const ExpenseDate = (props) => {

    const month = props.dateItem.toLocaleString('en-US',{month :'long'});
    const day = props.dateItem.toLocaleString('en-US',{day:'2-digit'});
    const year = props.dateItem.getFullYear();
    return (
        <div className="flex flex-col w-20 h-20 border border-neutral-600 bg-[#2a2a2a] text-white rounded-xl items-center justify-center">
            <div className="text-xs font-bold">{month}</div>
            <div className="text-xs">{year}</div>
            <div className="text-2xl font-bold">{day}</div>
        </div>
    );
}

export default ExpenseDate;