import "./App.css";
import Navbar from "./components/Navbar.js";
import TodoList from './components/Todolist.js';
function App() {
  return (
    <div className="App" style={{fontFamily:'times New Roman'}} >
      <Navbar />
      <br />
      <h2>My ToDo's</h2>
      <div className="todo-container">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
