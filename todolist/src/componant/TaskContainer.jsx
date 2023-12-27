import React, { useEffect, useState } from "react";

const TaskContainer = () => {
  let tempArr = [];
  // const[data ,setData]=useState([])
  const [task, setTask] = useState(tempArr);
  const [getValue, setGetValue] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/todos").then((result)=>{
      result.json().then((res)=>{
        tempArr=res
        setTask(tempArr.todos)
      })
    })

    
      // .then(async (res) => {
      //   tempArr = await res.json();
      //   setTask(task.todo)
      // })

      // .cath((err) => {
      //   console.log(err);
      // });
  },[]);
  console.log(task,'this is api ')

 

  function addData() {
    setTask([getValue, ...task]);
  }
  console.log(task);

  function deleteData(index) {
    alert(index + 1);
  }
  return (
    <div style={{ marginLeft: 100, marginTop: 20 }}>
      <input
        type="text"
        onChange={(val) => {
          setGetValue(val.target.value);
        }}
      />
      <button onClick={addData}>add</button>
      <br />
      {task.map((ele, index) => {
        return (
          <div
            style={{ backgroundColor: "skyblue", width:300, marginTop: 10 }}
          >
            {ele.id}-{ele.todo}
            <button
              onClick={() => {
                deleteData(index);
              }}
            >
              del
            </button>
          </div>
        );
      })}
    <hr /><hr />
    </div>
  );
};

export default TaskContainer;
