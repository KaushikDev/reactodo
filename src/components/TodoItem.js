import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
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
        {todo.text}
      </p>
      <span
        index={index}
        onClick={() => removeTodo(index)}
        style={{ cursor: "pointer" }}
      >
       <FontAwesomeIcon icon={faMinusCircle} />
       
      </span>
    </div>
  );
};

export default TodoItem;
