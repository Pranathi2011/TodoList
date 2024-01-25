import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './Todo.css';

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos,setCompletedTodos] = useState([]);

  const onClickHandler = (e) => {
    let updatedTodos = [...todos];
    let newTodo = {title:input,status:false};
    updatedTodos.push(newTodo);
    setTodos(updatedTodos);
    setInput("");
    e.preventDefault();
  };
  const handleComplete = (id) =>{
    let newTasks = todos.map((task,index)=>{
      if(index===id){
        let updates = {title:task.title,status:!task.status};
        let filtered = todos.filter((task,index)=> index!== id );
        filtered.push(updates);
        setTodos(filtered);
        return filtered;
      }
      return task;
    })
    let filtered = todos.filter((task,index)=>index===id);
    let completed = [...completedTodos];
    completed.push(filtered);
    setCompletedTodos(completed);
    console.log(completed);
  };
  const handleDel = (id) => {
    let filtered = todos.filter((task,index)=> index!== id );
    setTodos(filtered);
  };

  return (
    <div style={{ backgroundColor: "rgb(6, 46, 89)",paddingTop:'20px',paddingBottom:'20px' }}>
      <div className="input" style={{ margin: "10px", marginLeft: "48px" }}>
        <form action="">
          <input
            type="text"
            className="todo-item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the task here"
            style={{
              width: "355px",
              height: "40px",
              margin: "10px",
              fontFamily: "times New Roman",
            }}
          />
          <button
            onClick={onClickHandler}
            style={{
              height: "33px",
              borderRadius: "5px",
              fontFamily: "times New Roman",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Add Task
          </button>
        </form>
      </div>
      <div className="display" style={{
        padding:'10px'
      }}>
        {todos&&todos
        .map((task, index) => {
          return (
            <React.Fragment key={index + 1} >
            <div style={{width:'100%'}} >
              <div
                className="task"
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  alignItems:'center',
                  width:'80%',
                  border:'1px solid white',
                  margin:'0px auto',
                  padding:'8px',
                  paddingLeft:'0px',
                  marginBottom:'10px'
                }}
              >
                <div className="task-desc" 
                style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',  
                 margin:'0px 6px',
                 
                }}>
                  <p
                    style={{
                      border: "1px solid white",
                      borderRadius: "10px",
                      height: "19px",
                      width: "19px",
                      margin: "0px 5px",
                      textAlign:'center',
                      justifyContent: "center",
                      fontSize:'14px'
                    }}
                  >
                    {index + 1}
                  </p>
                  
                  <p className= {task.status? 'done': ''}
                  style={{
                    margin: "0px 5px"
                  }} 
                  >{task.title}</p>
                </div>
                <div className="icons" 
                 style={{
                    display:'flex',
                    position:'fixed',
                    transform:'translateX(370px)'
                 }}>
                  <span>
                    <FontAwesomeIcon onClick={()=>handleComplete(index)} icon={faCircleCheck} />
                  </span>
                  <span  >
                    <FontAwesomeIcon onClick={()=>handleDel(index)} icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
