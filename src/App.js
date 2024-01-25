import "./App.css";
import Navbar from "./components/Navbar.js";
import TodoList from './components/Todolist.js';
import About from './components/About.js';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{fontFamily:'times New Roman'}} >
      <Navbar />
      <br />
      <h2>My ToDo's</h2>
       <div className="todo-container">
        <Routes>
            <Route path="/" element={<TodoList/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
       </div>
    </div>
  );
}

export default App;
