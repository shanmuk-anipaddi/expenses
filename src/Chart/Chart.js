import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    console.log("IN chart js");
    console.log(props.dataPoints);
    let getMaxvalue = props.dataPoints.map(dataPoint=>dataPoint.value);
                      //props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximumValue = Math.max(...getMaxvalue);
    console.log('CHart Total max value :'+totalMaximumValue);
    return (
        <div className="p-4 rounded-xl bg-[#f8dfff] text-center flex justify-around h-40 mt-2">
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximumValue} label={dataPoint.label} />
            ))}
        </div>
    );
}

export default Chart;