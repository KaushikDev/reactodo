import React from "react";
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
        X
      </span>
    </div>
  );
};

export default TodoItem;
