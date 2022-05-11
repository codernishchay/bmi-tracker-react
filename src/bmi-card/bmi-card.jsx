import React from "react";

const BMICard =({ bmi })=>{
    console.log(bmi)
    return (
        <div className="bmi-card">
            {bmi && <div>
                  <h3>{bmi.bmi}</h3>
                  <p>{bmi.height}</p>
                  <p>{bmi.weight}</p>
                  <p>{bmi.date}</p>
            </div>
} 
        </div>
    )
}

export default BMICard ; 