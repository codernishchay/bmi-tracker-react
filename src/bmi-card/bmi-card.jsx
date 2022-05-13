import React from "react";

const BMICard =({ bmi , setlist })=>{
    console.log(bmi)
    const handledelete = ()=>{
         setlist((pre)=> pre.filter((ele)=> ele.time != bmi.time ))
    }
    return (
        <div className="bmi-card" data-tag="bmi-card">
            {bmi && <div className="row">
                <div className="col"> 
                <div className="bmi">  BMI  : {bmi.bmi}</div>
                 <div>Height : {bmi.height}</div>
                   </div>
                   <div className="col"> 
                    <div>Weight : {bmi.weight}</div>
                  <div>Date : {bmi.date}</div>
                  </div>
            </div>
}           <button data-tag="delete-card" onClick={handledelete}>X</button>
        </div>
    )
}

export default BMICard ; 