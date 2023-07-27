import React, { useState } from "react";
import styled from "styled-components";
import { TodoItemStyled } from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const BottomSheet = styled.div`
    position: fixed;
    right: 10px;
    bottom: 0;
    transition: all 1s;
    border: 0;
    width: 20%;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    border-radius: 10px 10px 0px 0px;
    transform: translateY(calc(100% - 41.6px));

    &.show {
        transform: translateY(0);
    }

    & > div {
        input {
            display: none;
        }

        label {
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px;
        }
    }

    ul {
        max-height: 314px;
        overflow-y: scroll;
    }
`;

const ClearListItem = styled(TodoItemStyled)`
    &.nothing {
        background-color: #ececec;
    }
`;

function Empty() {
    return <ClearListItem className="nothing">Nothing...</ClearListItem>;
}

function ClearTodos() {
    const todos = useSelector((state: RootState) =>
        state.todos.filter((todo) => todo.done),
    );

    const [visible, setVisible] = useState(false);

    return (
        <BottomSheet className={`${visible ? "show" : ""}`}>
            <div>
                <input
                    type="checkbox"
                    id="bottom-toggle"
                    onChange={() => setVisible((visible) => !visible)}
                />
                <label htmlFor="bottom-toggle">Clear List</label>
            </div>
            <ul>
                {todos.length == 0 ? (
                    <Empty />
                ) : (
                    todos.map((todo) => (
                        <TodoItemStyled key={todo.id}>
                            {todo.text}
                        </TodoItemStyled>
                    ))
                )}
            </ul>
        </BottomSheet>
    );
}
/*

*/

export { ClearTodos };
