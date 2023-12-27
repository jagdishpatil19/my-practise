// import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'

const SingleTask =  ({task,taskNo}) => {
 
  function deletData(index){
alert(index)
  }
 
  
 

  return (
    <div style={{backgroundColor:'lightblue', width:300 , height:30 ,margin:15}}> 
    {taskNo}-
     {task}<button onClick={()=>{deletData(taskNo)}} >del</button>
    </div>
     
     
  )
}

export default SingleTask 