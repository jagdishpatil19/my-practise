import React, { useState } from "react";

const TicTacToe = () => {
  let array = [".", ".", ".", ".", ".", ".", ".", ".", "."];

  const [arr, setArr] = useState(array);
  const [value, setValue] = useState("x");
  const [win, setWin] = useState("");

  // function players() {
  //   if (value === "x") {
  //     setValue("o");
  //   } else {
  //     setValue("x");
  //   }
  // }

  function winner() {
    console.log("winner function call");
    if (
      (arr[0] ==value  && arr[1] ==value  && arr[2] ==value ) ||
      (arr[3] ==value  && arr[4] ==value  && arr[5] ==value ) ||
      (arr[6] ==value  && arr[7] ==value  && arr[8] ==value ) ||
      (arr[0] ==value  && arr[3] ==value  && arr[6] ==value ) ||
      (arr[1] ==value  && arr[4] ==value  && arr[7] ==value ) ||
      (arr[2] ==value  && arr[5] ==value  && arr[8] ==value ) ||
      (arr[0] ==value  && arr[4] ==value  && arr[8] ==value ) ||
      (arr[2] ==value  && arr[4] ==value  && arr[6] ==value )
    ) {
      setWin(value);
      
        
        // restart()
    }
    
  }
  function onclick(ind) {
    
    if(arr[ind]==="."){
      arr[ind] = value;
      setValue(value==="x"?"o":'x')

    }
   
    setArr([...arr]);
    // players();
    winner();
  }
  function restart(){
    setWin('')
    setArr([".", ".", ".", ".", ".", ".", ".", ".", "."])
  }
  
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {arr.map((ele, ind) => {
          return (
            <button
              onClick={() => {
                onclick(ind);
              }}
              style={{ height: 80 }}
            >
              {ele}
            </button>
          );
        })}
      </div>

      <h2 style={{ color: "white", fontSize: 40 }}>
        {" "}
        <span style={{ color: "black" }}>winner</span> -{win}
      </h2>
      <button onClick={restart} >restart</button>
    </div>
  );
};

export default TicTacToe;
