import React, { useState } from 'react'

const TicTacToe = () => {

 let array=['.','.','.','.','.','.','.','.','.']

 const [arr,setArr]=useState(array)
 const[value ,setValue]=useState('x')
const [win,setWin]=useState("")
 function players(){
    if(value==="x"){
setValue('o')
    }
    else{setValue('x')}
 }

 function winner(){
   console.log('winner function call')
  if((arr[0]=="x"&&arr[1]=="x"&&arr[2]=="x")||(arr[3]=="x"&&arr[4]=="x"&&arr[5]=="x")||(arr[6]=="x"&&arr[7]=="x"&&arr[8]=="x")|| 
     (arr[0]=="x"&&arr[3]=="x"&&arr[6]=="x")||(arr[1]=="x"&&arr[4]=="x"&&arr[7]=="x")|| (arr[2]=="x"&&arr[5]=="x"&&arr[8]=="x")||
     (arr[0]=="x"&&arr[4]=="x"&&arr[8]=="x")||(arr[2]=="x"&&arr[4]=="x"&&arr[6]=="x")   ){
setWin("x")
  }
 else if((arr[0]=="o"&&arr[1]=="o"&&arr[2]=="o")||(arr[3]=="o"&&arr[4]=="o"&&arr[5]=="o")||(arr[6]=="o"&&arr[7]=="o"&&arr[8]=="o")|| 
         (arr[0]=="o"&&arr[3]=="o"&&arr[6]=="o")||(arr[1]=="o"&&arr[4]=="o"&&arr[7]=="o")|| (arr[2]=="o"&&arr[5]=="o"&&arr[8]=="o")||
         (arr[0]=="o"&&arr[4]=="o"&&arr[8]=="o")||(arr[2]=="o"&&arr[4]=="o"&&arr[6]=="o")   ){
setWin("o")
  }

 }
 function onclick(ind){
 arr[ind]=value
 setArr([...arr])
 players()
 winner()
 }
  return (
   <div>
     <div style={{display:"grid", 
    gridTemplateColumns:"auto auto auto"}}>
        {arr.map((ele,ind)=>{
            return <button onClick={()=>{onclick(ind)}} style={{height:80}}>{ele}</button>
        })}

    </div>

        <h2 style={{color:'white', fontSize:40}}> <span style={{color:'black'}}>winner</span> -{win}</h2>
   </div>
  )
}

export default TicTacToe