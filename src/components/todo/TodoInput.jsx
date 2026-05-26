
const TodoInPut = (props) => {
    console.log(">>> check props", props)
    const { AddNewTodo } = props;
    // AddNewTodo("Tuan Anh");
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name)
    }

    return (
        <div className='todo-input'>
            <input type="text" name="" id="" placeholder='Enter your task'
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoInPut