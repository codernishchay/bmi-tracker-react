import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'; 
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


const LineChart = ({list})=>{
     const [lst, setlst] = useState(); 
     useEffect(()=>{
         const arr = []; 
         list.forEach(element => {
               arr.push(element.bmi);  
         });
         setlst(arr); 
     }, [list])
       
     const data = {
           labels: ['1','2','3','4','5','6','7'], 
           datasets : [
               {
                   label : "BMI for last 7 days", 
                   data :  lst
                }
           ]
      }
      return <Line data-tag="graph" data={data}></Line>
}

export default  LineChart ; 