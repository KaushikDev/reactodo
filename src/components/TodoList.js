import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "../sass/TodoList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList} from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
    const [todos, setTodos] = useState([]);  

    const addToList = ( task ) => {
        const updatedTodoList = [ ...todos, task];
        const doneTodos = updatedTodoList.filter(item => {return (item.done)});
        const notDoneTodos = updatedTodoList.filter(item => {return (!item.done) });
        setTodos([...notDoneTodos, ...doneTodos]);
    }

    const removeTodo = (index) => {
        const todoList = [...todos];
        todoList.splice(index, 1);
        setTodos(todoList);
    }

    const markStatus = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        const doneTodos = updatedTodos.filter(item => {return (item.done)});
        const notDoneTodos = updatedTodos.filter(item => {return (!item.done) });
        setTodos([...notDoneTodos, ...doneTodos]);

}
    return(
        <div className="todo__list">
            <FontAwesomeIcon icon={faClipboardList} style={{fontSize:"1.5rem", margin:"1rem", color:"#fff"}}/>
            <TodoForm addToList={addToList} />
            {todos.length ? todos.map((todo, index) => {
                return <TodoItem key={`${index} - ${todo}`} todo={todo} index={index} removeTodo={removeTodo} markStatus={markStatus}/>
            }) : "" }
        </div>
    );

}

export default TodoList; 