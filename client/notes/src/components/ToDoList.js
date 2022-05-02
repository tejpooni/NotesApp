import React from 'react';
import ToDo from './ToDo';
 
 
const heading = {
    color: 'navy',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Courier New '
}

//list of all the tasks (completed/not completed)
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
             <h1 style={heading}>Task Manager</h1>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
 };

export default ToDoList;