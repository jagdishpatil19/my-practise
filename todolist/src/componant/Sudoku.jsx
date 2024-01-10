import React, { useEffect, useState } from 'react'
 


 
const Sudoku = () => {
    let array=["1","5","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]
    const[arr,setArr]=useState(array)
    console.log(arr[1])
 const[inputValue,setInpurtValue]=useState()
    const[Value,setValue]=useState()
 

    let numbers=[1,2,3,4,5,6,7,8,9]
function getInputValue(index){
  
}useEffect(()=>{
  console.log('this is useEffect')
})
  return (
    <div>
        <div  style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto auto auto auto auto" }}>
       {arr.map((ele,index)=>{
        return <input type="text" style={{width:37,height:32 ,marginLeft:0 }}    maxLength={1} />
       })}
         
          {numbers.map((ele,index)=>{
            return <button onClick={()=>{setValue(index+1)}}>{ele}</button>

          })}
        </div>

    </div>
  )
}

export default Sudoku