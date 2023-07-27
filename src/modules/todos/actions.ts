import { createAction, createStandardAction } from "typesafe-actions";
import { TodosState } from "./types";

const ADD_TODO = "todos/ADD_TODO" as const;
const EDIT_TODO = "todos/EDIT_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const CLEAR_TODO = "todos/CLEAR_TODO" as const;
const ALL_ACTIVE_TODO = "todos/ALL_ACTIVE_TODO" as const;
const DONE_TODO = "todos/DONE_TODO" as const;

const addTodo = createStandardAction(ADD_TODO)<string>();
const editTodo = createStandardAction(EDIT_TODO)<{
    id: number;
    text: string;
}>();
const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
const clearTodo = createStandardAction(CLEAR_TODO)<number>();
const allActiveTodo = createStandardAction(ALL_ACTIVE_TODO)<boolean>();
const doneTodo = createStandardAction(DONE_TODO)();

export {
    ADD_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    CLEAR_TODO,
    ALL_ACTIVE_TODO,
    DONE_TODO,
    addTodo,
    editTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
    doneTodo,
};
