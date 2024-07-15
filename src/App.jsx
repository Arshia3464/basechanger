import React, { useState, useEffect } from "react";
import MyForm from "./components/Form";
import convertBase from "./func";
import baseCheck from "./basecheck";
import "./App.css"

function App()  {
  const [val, setVal] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  const [result, setResult] = useState(0)

  useEffect(()=>{
    setResult(0)
  }, [val,val2,val3])

  function calculate (){
    if(baseCheck(val,val2)){
      setResult("Your number and its base dont match")
    }else{
      setResult(convertBase(val, val2, val3))
    }
    
  }
  return (
  <>
    <div className="maindiv" >
      <p className="texts">Number</p>
      <MyForm className="inputs" name={''} inputV={val} setInputV={setVal} />
      <p className="texts">Base</p>
      <MyForm className="inputs" name={''} inputV={val2} setInputV={setVal2} />
      <p className="texts">Target Base</p>
      <MyForm className="inputs" name={''} inputV={val3} setInputV={setVal3} />
      <button className="mybutton" onClick={calculate}>Convert</button>
      <div className="result">
        <p style={{padding:'0px',margin:'0px'}}>{result} </p>
      </div>
    </div>
    
  </>
  );
}
export default App;