import React, { useState } from 'react'

const TicTacToe = () => {

 let array=['.','.','.','.','.','.','.','.','.']

 const [arr,setArr]=useState(array)
 const[value ,setValue]=useState('x')

 function players(){
    if(value==="x"){
setValue('o')
    }
    else{setValue('x')}
 }
 function onclick(ind){
 arr[ind]=value
 setArr([...arr])
 players()
 }
  return (
    <div style={{display:"grid", 
    gridTemplateColumns:"auto auto auto"}}>
        {arr.map((ele,ind)=>{
            return <button onClick={()=>{onclick(ind)}} style={{height:80}}>{ele}</button>
        })}
    </div>
  )
}

export default TicTacToe