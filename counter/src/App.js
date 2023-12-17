 
 import { useState } from "react";

function App() {
 
  let [counter ,setCounter]=useState(10)

  function addition(){
    counter=++counter
    if (counter>20){
       counter=20
    }
    setCounter(counter)
  }
  function remove(){
    counter=counter-1
    
    if (counter<0){
      counter=0
   }
    setCounter(counter)
  }
  return (
      <div>
        <h1>
          this is counter
        </h1>
      <h2>value {counter}</h2>
      <button onClick={addition} >add</button>
      <button onClick={remove}>remove</button>
       
      </div>
  );
}

export default App;
