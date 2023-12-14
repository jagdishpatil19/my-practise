import React from 'react'

const SingleTask = (task1) => {
let task=task1.task
    
  return (
    <div style={{backgroundColor:'lightblue', width:300 , height:30 ,margin:15}}>{task} </div>
     
  )
}

export default SingleTask