import React, { useState } from 'react'

const Calculator = () => {
  const[first,setFirst]=useState()
  const[second,setSecond]=useState()

  
  
 const[sum ,setSum]=useState()
  return (
    <div>
      <input type="number"  onChange={(ele)=>{setFirst (Number(ele.target.value))}} /> 
      <input type="number" onChange={(ele)=>{setSecond (Number(ele.target.value))}}/> <span>+</span>
      <button onClick={()=>{setSum(first+second)}}>add</button><h1>{sum}</h1>
      <button onClick={()=>{setSum(first*second)}}>multiplication</button>
    </div>
  )
}

export default Calculator