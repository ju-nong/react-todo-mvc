import { createReducer } from "typesafe-actions";
import {
    ADD_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    CLEAR_TODO,
    ALL_ACTIVE_TODO,
    DONE_TODO,
} from "./actions";
import { TodosAction, TodosState } from "./types";

let nextId: number = JSON.parse(localStorage.getItem("nextId") || "null") ?? 1;

const initialTodos: TodosState = JSON.parse(
    localStorage.getItem("todos") || "[]",
);

const todos = createReducer<TodosState, TodosAction>(initialTodos, {
    [ADD_TODO]: (state, { payload: text }) =>
        state.concat({ id: nextId++, text, isActive: false, done: false }),
    [EDIT_TODO]: (state, { payload }) =>
        state.map((todo) =>
            todo.id === payload.id ? { ...todo, text: payload.text } : todo,
        ),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map((todo) =>
            todo.id === id ? { ...todo, isActive: !todo.isActive } : todo,
        ),
    [CLEAR_TODO]: (state, { payload: id }) =>
        state.map((todo) => (todo.id === id ? { ...todo, done: true } : todo)),
    [ALL_ACTIVE_TODO]: (state, { payload: active }) =>
        state.map((todo) => ({
            ...todo,
            isActive: !active,
        })),
    [DONE_TODO]: (state) =>
        state.map((todo) => (todo.isActive ? { ...todo, done: true } : todo)),
});

export { todos };
