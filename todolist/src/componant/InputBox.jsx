import React from 'react'
import SingleTask from './SingleTask'

const InputBox = () => {
  return (
    <div>
        <input style={{marginTop:20,marginLeft:50}} />
        <button>Add</button>
        <SingleTask task='going to Gym'/>
        <SingleTask task='daily read some books' />
        <SingleTask task='anything'/>
        <SingleTask task='playning a game'/>
    </div>
  )
}

export default InputBox