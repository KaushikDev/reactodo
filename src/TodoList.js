import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


const TodoList = () => {
    const [todos, setTodos] = useState([]);  

    const addToList = ( task ) => {
        const updatedTodoList = [ task, ...todos];
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
        <React.Fragment>
            <TodoForm addToList={addToList} />
            {todos.length ? todos.map((todo, index) => {
                return <TodoItem key={`${index} - ${todo}`} todo={todo} index={index} removeTodo={removeTodo} markStatus={markStatus}/>
            }) : "Enter your first todo" }
        </React.Fragment>
    );

}

export default TodoList; 