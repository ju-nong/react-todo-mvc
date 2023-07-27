import React from "react";

interface Props {
    isAllCheck: Boolean;
    onAllActiveTodo: () => void;
    children: React.ReactNode;
}

function TodoActiveButton({ isAllCheck, onAllActiveTodo, children }: Props) {
    return (
        <button
            className={`allCheckBtn ${isAllCheck ? "allChecked" : ""}`}
            type="button"
            onClick={onAllActiveTodo}
        >
            {children}
        </button>
    );
}

export { TodoActiveButton };
