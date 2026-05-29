import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoInPut from './components/todo/TodoInput'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning Layout" },
    // { id: 2, name: "Watching youtube" }
  ]);

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const rndInt = randomIntFromInterval(1, 6);
  console.log("Random number: ", rndInt);

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInPut AddNewTodo={AddNewTodo} />
      <TodoData todoList={todoList} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
