import React from "react";

const TodoItem = ({ todo, index, removeTodo, markStatus }) => {
 
  return (
    <div>
      <p onClick={()=>markStatus(index)} style={todo.done ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
        {todo.text}
    </p><span index={index} onClick={() => removeTodo(index)} style={{cursor: "pointer"}}>X</span>
    </div>
  );
};

export default TodoItem;
