import React, { useState } from 'react';

function Todo() {
    const [input, setInput] = useState('');
    const [todos,setTodos] = useState([]);
    const onClickHandler =(e)=>{
      let updatedTodos = [...todos];
      updatedTodos.push(input);
      setTodos(updatedTodos);
      setInput("");
      e.preventDefault();
    }
   
  return (
    <div style={{backgroundColor:'rgb(6, 46, 89)'}} >
      <div className='input'style={{margin:'10px',marginLeft:'48px'}} >
        <form action="" >
            <input type="text" name="todo-item" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter the task here' style={{width:'355px',height:'40px',margin:'10px',fontFamily:'times New Roman'}} />
            <button onClick={onClickHandler} style={{height:'33px',borderRadius:'5px',fontFamily:'times New Roman',fontWeight:'bold',fontSize:'16px'}} >Add Task</button>
        </form>
      </div>
      <div className="display">
        {todos.map((task,index)=>{
          return(
            <div key={index+1}>
              <div className='task' style={{color:'white',display:'flex',flexDirection:'row'}} >
                 <p style={{border:'1px solid white', borderRadius:'15px',height:'25px',width:'25px',margin:'0px 10px',textAlign:'center',justifyContent:'center'}} >{index+1}</p>
                 <p>{task}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
