
const TodoData = (props) => {
    const { name, age, data } = props;
    console.log(">>> check props", props)
    const AddNewTodo = () => {
        alert("call me")
    }

    return (
        <div className='todo-data'>
            <div>My name is a {name}</div>
            <div >Learning Layout</div>
            <div>Watching youtube</div>
        </div>
    )
}

export default TodoData;