import { useForm } from "react-hook-form"

const BmiForm = ({list, setlist})=>{
    const {register, handleSubmit } = useForm(); 
    const onSubmit = (data)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
    let bmi = (data.weight / ((data.height * data.height) 
    / 10000)).toFixed(2);    
    var data = {
             bmi: bmi , 
             height: data.height,
             weight: data.weight, 
             date: date 
            }
            setlist((pre)=>{
                  if(pre.length < 7){
                    return [...pre, data]; 
                  }else {
                      pre.shift();
                      return [...pre, data];  
                  }
            })        
    }
    return (
        <div className="bmi-form" data-tag="bmi-form" >
         BMI : <input {...register("height")} data-tag="height" required  placeholder="height(cm)" ></input>
         Weight : <input {...register("weight")} data-tag="weight" required placeholder="weight(kg)" ></input>
         <button className="submit-form" data-tag="submit" onClick={handleSubmit(onSubmit)} >Submit</button>      
        </div>
    )
}

export default BmiForm ; 