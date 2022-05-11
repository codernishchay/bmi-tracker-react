import React from "react";

const BMICard =({ bmi })=>{
    console.log(bmi)
    const handledelete = ()=>{
         
    }
    return (
        <div className="bmi-card">
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
}           <button onClick={handledelete}>X</button>
        </div>
    )
}

export default BMICard ; 