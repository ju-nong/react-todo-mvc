import { ActionType } from "typesafe-actions";
import {
    addTodo,
    editTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
    doneTodo,
} from "./actions";

const actions = {
    addTodo,
    editTodo,
    toggleTodo,
    clearTodo,
    allActiveTodo,
    doneTodo,
};

type Todo = {
    id: number;
    text: string;
    isActive: boolean;
    done: boolean;
};

type TodosState = Todo[];

type TodosAction = ActionType<typeof actions>;

export type { Todo, TodosState, TodosAction };
