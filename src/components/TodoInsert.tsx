import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
    addTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
    Todo,
} from "../modules/todos";
import { TodoActiveButton } from "./TodoActiveButton";

const TodoInsertStyled = styled.form`
    padding-right: 16px;
    display: flex;
    width: 100%;

    button.allCheckBtn {
        width: 10%;
        border: 0;
        background-color: transparent;
        color: #e6e6e6;
        font-size: 22px;
        writing-mode: vertical-rl;
        line-height: 54px;
    }

    button.allCheckBtn.allChecked {
        color: #737373;
    }
`;

const TodoInsertInputStyled = styled.input`
    padding: 16px;
    border: 0;
    outline: 0;
    background-color: transparent;
    line-height: 1.4em;
    font-size: 24px;
    width: 90%;

    &::placeholder {
        color: #e6e6e6;
        font-style: italic;
    }
`;

function TodoInsert() {
    const todos = useSelector((state: RootState) =>
        state.todos.filter((todo) => !todo.done),
    );
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const isAllCheck = useMemo(
        () =>
            todos.length ? todos.every((todo: Todo) => todo.isActive) : false,
        [todos],
    );

    const handleAllActiveTodo = () => dispatch(allActiveTodo(isAllCheck));

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleAddTodo = (event: React.FormEvent) => {
        event.preventDefault();

        if (text.trim().length) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <TodoInsertStyled onSubmit={handleAddTodo}>
            <TodoActiveButton
                isAllCheck={isAllCheck}
                onAllActiveTodo={handleAllActiveTodo}
            >
                ❯
            </TodoActiveButton>
            <TodoInsertInputStyled
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleTextChange}
            />
        </TodoInsertStyled>
    );
}

export { TodoInsert };
