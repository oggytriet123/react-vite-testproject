import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoInPut from './components/todo/TodoInput'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const hoidanit = "Tuan Anh";
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning Layout" },
    { id: 2, name: "Watching youtube" }
  ])
  const age = 25;
  const data = {
    address: "HCM",
    country: "VietNam"
  }
  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInPut
        AddNewTodo={AddNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
