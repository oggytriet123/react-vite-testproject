import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoInPut from './components/todo/TodoInput'
import reactLogo from './assets/react.svg'

const App = () => {


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInPut />
      <TodoData />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
