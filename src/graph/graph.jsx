import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'; 
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


const LineChart = ({list})=>{
      
       
      const data = {
           labels: ['1','2','3','4','5','6','7'], 
           datasets : [
               {
                   label : "BMI for last 7 days", 
                   data :  list
                }
           ]
      }
      return <Line data={data}></Line>
}

export default  LineChart ; 