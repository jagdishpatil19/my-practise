import React from 'react'
import SingleTask from './SingleTask'
 
let array=['going to Gym','daily read some books','anything','playning a game']

const TaskComponant = ({task}) => {
 
  let newTask=task

  
  array.unshift(newTask)
    

  console.log(array,'this is arry')
  return (
    <div>
   

         {array.map((ele,index)=>{
          
          return <SingleTask task={ele} taskNo={index+1}/> 
         })}
      
    </div>
  )
}

export default TaskComponant 
 
 