import React, {useState} from 'react';

//form for adding tasks
const ToDoForm =({addTask})=>{

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
//task is added on the onsubmit
    return(
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                    value={userInput} 
                    type="text" 
                    onChange={handleChange} 
                    placeholder="Enter task..."
                />
                <button>Submit</button>
            </form>
        </div>
    )

}
export default ToDoForm;