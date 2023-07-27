import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { doneTodo } from "../modules/todos";

const Footer = styled.footer`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 5px 15px;
    color: #777;

    &:before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
            0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
            0 17px 2px -6px rgb(0 0 0 / 20%);
        z-index: 1;
    }

    & > span {
        z-index: 2;
        line-height: 35px;
    }

    .menu {
        display: flex;
        justify-content: center;
        z-index: 2;
    }

    input {
        display: none;
    }

    input:checked + label {
        border-color: rgba(175, 47, 47, 0.2);
    }

    label {
        margin: 3px;
        padding: 3px 7px;
        border: 1px solid transparent;
        border-radius: 3px;

        p {
            text-transform: capitalize;
        }
    }

    label:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }

    & > button {
        z-index: 2;
        background-color: transparent;
        border: 0;
        outline: 0;
        color: #777;
    }

    & > button:hover {
        text-decoration: underline;
    }
`;

type Menu = {
    name: string;
    value: string;
};

type Menus = Menu[];

interface TodoMenuProps {
    todoCount: number;
    onSetFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface MenuButtonProps {
    menu: Menu;
    index: number;
    onSetFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const menus: Menus = [
    { name: "all", value: "null" },
    { name: "active", value: "false" },
    { name: "completed", value: "true" },
];

function MenuButton({ menu, index, onSetFilter }: MenuButtonProps) {
    return (
        <>
            <input
                type="radio"
                value={menu.value}
                name="state"
                defaultChecked={index === 0}
                onChange={onSetFilter}
                id={menu.name}
            />
            <label htmlFor={menu.name}>
                <p>{menu.name}</p>
            </label>
        </>
    );
}

function TodoMenu({ todoCount, onSetFilter }: TodoMenuProps) {
    const dispatch = useDispatch();

    return (
        <Footer>
            <span>{todoCount} items left</span>
            <div className="menu">
                {menus.map((menu, index) => (
                    <MenuButton
                        key={index}
                        menu={menu}
                        index={index}
                        onSetFilter={onSetFilter}
                    />
                ))}
            </div>
            <button onClick={() => dispatch(doneTodo())}>
                Clear completed
            </button>
        </Footer>
    );
}

export { TodoMenu };
