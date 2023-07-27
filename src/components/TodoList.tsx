import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, clearTodo, TodosState } from "../modules/todos";

const TodoListStyled = styled.ul`
    border-top: 1px solid #e6e6e6;
    list-style: none;
    width: 100%;
`;

interface TodoListProps {
    todos: TodosState;
}

function TodoList({ todos }: TodoListProps) {
    const dispatch = useDispatch();

    const handleToggleTodo = (id: number) => dispatch(toggleTodo(id));
    const handleEditTodo = (id: number, text: string) =>
        dispatch(editTodo({ id, text }));
    const handleClearTodo = (id: number) => dispatch(clearTodo(id));

    return (
        <TodoListStyled>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleToggleTodo={handleToggleTodo}
                    handleEditTodo={handleEditTodo}
                    handleClearTodo={handleClearTodo}
                />
            ))}
        </TodoListStyled>
    );
}

export { TodoList };
