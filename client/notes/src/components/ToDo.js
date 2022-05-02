import React from 'react';

//used for individual tasks styling 
const ToDo = ({todo},{handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        // <div className={todo.complete ? strike : ""}>
        <div id = {todo.id} key = {todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} style = {{textDecoration: todo.complete ? 'line-through' :'none'}}>
           {todo.task}
       </div>
    );
};

export default ToDo;


