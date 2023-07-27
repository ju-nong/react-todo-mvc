import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { Header } from "./Header";
import { TodoList } from "../TodoList";
import { TodoMenu } from "../TodoMenu";

const MainStyled = styled.main`
    margin: 130px 0px 40px 0;
    background-color: #fff;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

function Main() {
    const [filter, setFilter] = useState<null | boolean>(null);

    const todos = useSelector((state: RootState) =>
        state.todos.filter((todo) => !todo.done),
    );

    const filterTodos = useMemo(
        () =>
            filter === null
                ? todos
                : todos.filter((todo) => todo.isActive === filter),
        [todos, filter],
    );

    const todoCount = useMemo(
        () => todos.filter((todo) => !todo.isActive).length,
        [todos],
    );

    const handleSetFilter = (event: React.ChangeEvent<HTMLInputElement>) =>
        setFilter(JSON.parse(event.target.value));

    return (
        <MainStyled>
            <Header />
            <TodoList todos={filterTodos} />
            {todos.length > 0 && (
                <TodoMenu todoCount={todoCount} onSetFilter={handleSetFilter} />
            )}
        </MainStyled>
    );
}

export { Main };
