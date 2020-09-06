import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "../sass/TodoItem.scss";



const TodoItem = ({ todo, index, removeTodo, markStatus }) => {
  return (
    <div className="todo__item">
       <p
        onClick={() => markStatus(index)}
        className={
          todo.done
            ? "completed"
            : "normal"
        }
      >
      {todo.done ? <FontAwesomeIcon icon={faCheckCircle} style={{fontSize:"1rem"}} /> : <FontAwesomeIcon icon={faCircle} style={{fontSize:"1rem"}} />}  {todo.text}
      </p>
      <span
        index={index}
        onClick={() => removeTodo(index)}
        style={{ cursor: "pointer" }}
      >
       <FontAwesomeIcon icon={faTrashAlt} />
       
      </span>
    </div>
  );
};

export default TodoItem;
