import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "../sass/TodoForm.scss";

const TodoForm = ({ addToList }) => {
  const [task, setTask] = useState({ text: "", done: false });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!task.text || task.text.trim() === "") return;

    addToList(task);

    setTask({ text: "", done: false });
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <input
        className="form__fields"
        type="text"
        placeholder="Add a new task"
        value={task.text}
        onChange={(event) => setTask({ text: event.target.value, done: false })}
      />
      <button className="form__fields">
        {/* <FontAwesomeIcon
          icon={faPlusCircle}
          style={{ color: "#2E7D32", fontSize: "1.75rem" }}
        /> */}Add
      </button>
    </form>
  );
};

export default TodoForm;
