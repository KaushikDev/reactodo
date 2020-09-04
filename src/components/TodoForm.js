import React, { useState } from "react";
import "../sass/TodoForm.scss";

const TodoForm = ({ addToList }) => {
  const [task, setTask] = useState({ text: "", done: false });

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    if(!task.text || task.text.trim() === "") return;

    addToList(task);

    setTask({text: "", done: false});
  };

  return (
    <form onSubmit={event => onFormSubmit(event)}>
      <input className="form__fields"
        type="text"
        placeholder="Enter a task..."
        value={task.text}
        onChange={event => setTask({ text: event.target.value, done: false })}
      />
      <button className="form__fields">ADD</button>
    </form>
  );
};

export default TodoForm;
