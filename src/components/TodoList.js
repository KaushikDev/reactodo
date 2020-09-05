import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "../sass/TodoList.scss";


const TodoList = () => {
    const [todos, setTodos] = useState([]);  

    const addToList = ( task ) => {
        const updatedTodoList = [ ...todos, task];
        setTodos(updatedTodoList);
    }

    const removeTodo = (index) => {
        const todoList = [...todos];
        todoList.splice(index, 1);
        setTodos(todoList);
    }

    const markStatus = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
}
    return(
        <div className="todo__list">
            <TodoForm addToList={addToList} />
            {todos.length ? todos.map((todo, index) => {
                return <TodoItem key={`${index} - ${todo}`} todo={todo} index={index} removeTodo={removeTodo} markStatus={markStatus}/>
            }) : "Add a task to get started !" }
        </div>
    );

}

export default TodoList; 