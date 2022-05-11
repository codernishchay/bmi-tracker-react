import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BmiForm from './bmi-form/bmi-form'
import LineChart from './graph/graph'
import BMICard from './bmi-card/bmi-card'

function App() {
  const  [list, setlist] = useState([]);  
  console.log(list)
  return (
    <div className="App">
       <h1> BMI </h1>
       <BmiForm list={list} setlist={setlist}></BmiForm>
        <div className='chart'>
       <LineChart list={list}/>
       </div>
       <div className='bmi-list'>
        { list.length > 0 && list.map((ele)=> <BMICard bmi={ele}></BMICard>        ) } 
       </div>
    </div>
  )
}

export default App