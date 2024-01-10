//  import Counter from "./componant/Counter";
// import { useState } from "react";
// import InputBox from "./componant/InputBox";
// import TaskComponant from "./componant/TaskComponant";

import Calculator from "./componant/Calculator";
// import Sudoku from "./componant/Sudoku";

import TicTacToe from "./componant/TicTacToe";

// import TaskContainer from "./componant/TaskContainer";

 
function App() {

  // const[task,setTask]=useState([ ])
 
  return (
    <div style={{backgroundColor:'red', height:400 ,width:408,overflow:'auto'}}> 
   {/* <InputBox setInput={setInput} /> 
    <TaskComponant task={input} /> */}
   {/* <Counter/> */}
   
   {/* <TaskContainer /> */}
   <TicTacToe/>/
   {/* <Sudoku/> */}
   {/* <Calculator/> */}
    </div>
  );
}

export default App;
