import React from 'react'
 
 
  

const InputBox = ({setInput}) => {

 let input;
  
 
  function getData(val){
     
      input=val.target.value
  
    

  
  }
   
  function addData(){
    setInput(input)

  }
  return (
    <div>
      
        <input style={{marginTop:20,marginLeft:50}} onChange={getData}/>
        <button onClick={addData} >Add</button>

     
    </div>
 
  )

}

export default InputBox