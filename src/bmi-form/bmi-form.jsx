import { useForm } from "react-hook-form"

const BmiForm = ({list, setlist})=>{
    const {register, handleSubmit } = useForm(); 
    const onSubmit = (data)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    let bmi = (data.weight / ((data.height * data.height) 
    / 10000)).toFixed(2);    
    var data = {
             bmi: bmi , 
             height: data.height,
             weight: data.weight, 
             data: date 
            }
         setlist((pre)=>[...pre, data ]);
    }
    return (
        <div className="bmi-form" data-tag="bmi-form" >
         <input {...register("height")} data-tag="height"  ></input>
         <input {...register("weight")} data-tag="weight" ></input>
         <button className="submit-form" data-tag="submit" onClick={handleSubmit(onSubmit)} >Submit</button>      
        </div>
    )
}

export default BmiForm ; 