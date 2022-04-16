import React from "react";

const ChartBar = (props) => {
    console.log("Value"+props.value);
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value/props.maxValue)*100)+'%';
    }
    console.log("IN Chart Bar");
    console.log(barFillHeight);
    return (
        <div className="h-full flex flex-col item-center">
            <div className="h-full w-full border border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end">
                <div className="bg-[#4826b9] w-full transition-[all 0.3s ease-out]" style={{height : barFillHeight}}></div>
            </div>
            <div className='font-bold text-[0.5rem] text-center'>{props.label}</div>
        </div>
    );
}

export default ChartBar;