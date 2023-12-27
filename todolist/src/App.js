//  import Counter from "./componant/Counter";
// import { useState } from "react";
// import InputBox from "./componant/InputBox";
// import TaskComponant from "./componant/TaskComponant";

import TicTacToe from "./componant/TicTacToe";

// import TaskContainer from "./componant/TaskContainer";

 
function App() {

  // const[task,setTask]=useState([ ])
 
  return (
    <div style={{backgroundColor:'red', height:400 ,width:400,overflow:'auto'}}> 
   {/* <InputBox setInput={setInput} /> 
    <TaskComponant task={input} /> */}
   {/* <Counter/> */}
   
   {/* <TaskContainer /> */}
   <TicTacToe/>
    </div>
  );
}

export default App;
