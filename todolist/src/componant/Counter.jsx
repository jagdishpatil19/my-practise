import React, { useState } from 'react'

const Counter = () => {
    const [value,setValue]=useState(1)
     
  return (

    
    <div>
        <h1 style={{textAlign:'center'}}>Counter</h1>
        <h1 style={{textAlign:'center'}}>{value}</h1>
        <button onClick={()=>{setValue(value+1 )}}>add</button>
        <button onClick={()=>{setValue(value-1)}}>dec</button>
    </div>
  )
}

export default Counter