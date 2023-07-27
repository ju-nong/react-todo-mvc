import React from "react";
import styled from "styled-components";
import { TodoInsert } from "../TodoInsert";

const HeaderStyled = styled.header``;

const TitleStyled = styled.h1`
    position: absolute;
    top: -132px;
    width: 100%;
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    z-index: -1;
`;

function Header() {
    return (
        <HeaderStyled>
            <TitleStyled>todos</TitleStyled>
            <TodoInsert />
        </HeaderStyled>
    );
}

export { Header };
