import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './App.css'
import { useState } from 'react';



function App() {
  const [age, setAge]=useState(null);
    const [height, setHeight]=useState(null);
    const [weight, setWeight]=useState(null);
    const [bmi, setBMI]=useState(null);
    const [cond, setCond]=useState("");

    const onSetAge = e =>{
      const value=e.target.value;
      setAge(value);
    }

    const onSetHeight = e =>{
      const value=e.target.value;
      setHeight(value);
    }

    const onSetWeight =e=>{
      const value=e.target.value;
      setWeight(value);
    }

    const calculateBMI = () =>{
      const height2=height*height;
      const result=weight/height2;
      setBMI(result);

       let bmiCond="Obese";
       if(result<=18.5){
        bmiCond="UnderWeight";
       }
       else if(result>=18.5 && result<=24.5){
        bmiCond="Healthy";
       }else if(result>=25 && result<=29 ){
        bmiCond="Overweight"
       }else{
        bmiCond="Obese"
       }
       setCond(bmiCond)
       }
    

       const handleReset=()=>{
        setAge(null)
        setHeight(null)
        setWeight(null)
        setBMI(null)
        setAge(0)
        setHeight(0)
        setWeight(0)
        setBMI(0)
                
      }
  return (
    <>
      <div className='main'>
        <div className='sub'>
        <h1>BMI CALCULATOR</h1>
           <form>
              <TextField id="outlined-basic" color='success'name='Age' placeholder='Age' variant="outlined" className='w-100 mt-3' value={age}  onChange={onSetAge}/> 
              <TextField id="outlined-basic" color='success' name='Height'placeholder='Height in Meter' variant="outlined" className='w-100 mt-3'value={height} onChange={onSetHeight}/>
              <TextField id="outlined-basic" color='success' name='Weight' placeholder='Weight in KG' variant="outlined" className='w-100 mt-3' value={weight} onChange={onSetWeight}/>
            
            <label><input type='radio' name="Gender" value="Male" className='m-2 mt-3'></input>Male</label>
            <label><input type='radio' name="Gender"  value="Female" className='m-2 mt-3'></input>Female</label><br></br>

              <Button  onClick={handleReset} variant="outlined" className='w-25 mt-3 m-1' color='success'>Reset</Button>
              <Button disabled={!weight || !height ||!age } variant="contained"className='w-25 mt-3 m-1' color='success'onClick={calculateBMI} >Submit</Button>
            

              <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column' id="msg">
              <p className='mt-3'>Your BMI is: {bmi}</p>
              <p>Your are <b>{cond}</b></p>
            
              </div>
           </form>
         
          </div>
        </div>
    </>
  )
}


export default App
