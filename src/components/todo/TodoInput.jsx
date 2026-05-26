
const TodoInPut = (props) => {
    console.log(">>> check props", props)
    const { AddNewTodo } = props;
    AddNewTodo("Tuan Anh");
    return (
        <div className='todo-input'>
            <input type="text" name="" id="" placeholder='Enter your task' />
            <button>Add</button>
        </div>
    )
}

export default TodoInPut