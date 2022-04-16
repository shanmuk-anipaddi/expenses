import React from "react";

const EventFilter = (props) => {

    

    const getSelectedYear = (e) => {
        //console.log(e.target.value);
        props.onChangeYear(e.target.value);
    }

    return (
        <div className="text-white pt-0 pr-4">
            <div className="flex w-full items-center justify-between mt-4 ">
                <label className="font-bold mb-2">Filter By Year</label>
                <select value={props.selected} onChange={getSelectedYear} className="font-inherit text-black p-2 font-bold rounded-md">
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
    
}

export default EventFilter;