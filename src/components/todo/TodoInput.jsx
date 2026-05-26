import { useState } from "react";

const TodoInPut = (props) => {

    // const valueInput = "Tuan Anh";
    const [valueInput, setValueInput] = useState("Tuan Anh")

    const { AddNewTodo } = props;
    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-input'>
            <input type="text" name="" id="" placeholder='Enter your task'
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is {valueInput}
            </div>
        </div>
    )
}

export default TodoInPut