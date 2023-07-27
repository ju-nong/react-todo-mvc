import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Todo } from "../modules/todos";

interface TodoItemProps {
    todo: Todo;
    handleToggleTodo?: (id: number) => void;
    handleEditTodo?: (id: number, text: string) => void;
    handleClearTodo?: (id: number) => void;
}

const TodoItemStyled = styled.li`
    border-bottom: 1px solid #ededed;
    position: relative;
    font-size: 24px;
    padding: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        display: none;
    }

    input:checked + label {
        text-align: center;
        line-height: 40px;
        border-color: #cee4e0;
    }

    input:checked + label:before {
        content: "✔";
        color: #61c4b1;
    }

    label {
        position: relative;
        width: 40px;
        height: 40px;
        border: 2px solid #ededed;
        border-radius: 100%;
    }

    span {
        width: 80%;
        word-break: break-all;
        line-height: 40px;
        outline: 0;
    }

    button {
        outline: 0;
        border: 0;
        background-color: transparent;
        padding: 5px;
        visibility: hidden;
    }

    &:hover button {
        visibility: visible;
    }

    &:checked + label {
        text-align: center;
        line-height: 40px;
        border-color: #cee4e0;
    }

    &:checked + label:before {
        content: "✔";
        color: #61c4b1;
    }
`;

function TodoItem({
    todo,
    handleToggleTodo,
    handleEditTodo,
    handleClearTodo,
}: TodoItemProps) {
    const id: string = todo.id.toString();
    const checkBox = useRef<HTMLInputElement>(null);

    const [editable, setEditable] = useState(false);

    const actionEdit = (event: React.FocusEvent<HTMLSpanElement>) => {
        setEditable(false);

        const text = event.target.innerText.trim();

        if (text) {
            handleEditTodo?.(todo.id, text);
        }
    };

    const enterCheck = (
        event:
            | React.KeyboardEvent<HTMLSpanElement> &
                  React.FocusEvent<HTMLSpanElement>,
    ) => {
        if (event.keyCode === 13) {
            setEditable(false);

            const content = event.target.innerText;

            if (content) {
                handleEditTodo?.(todo.id, content);
            }
        }
    };

    return (
        <TodoItemStyled>
            <input
                id={id}
                type="checkbox"
                ref={checkBox}
                checked={todo.isActive}
                onChange={() => handleToggleTodo?.(todo.id)}
            />
            <label htmlFor={id}></label>
            <span
                contentEditable={editable}
                onDoubleClick={() => setEditable(true)}
                onBlur={actionEdit}
                onKeyDown={enterCheck}
                suppressContentEditableWarning={true}
            >
                {todo.text}
            </span>
            <button onClick={() => handleClearTodo?.(todo.id)}>❌</button>
        </TodoItemStyled>
    );
}

export { TodoItem, TodoItemStyled };
export type { TodoItemProps };
