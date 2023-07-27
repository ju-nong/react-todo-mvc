const logger = (store: any) => (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);

    const { todos } = store.getState();

    if (action.type === "todos/ADD_TODO") {
        localStorage.setItem("nextId", todos.at(-1).id + 1);
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    return result;
};

export { logger };
