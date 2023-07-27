import React from "react";
import { Main } from "../components/semantic/Main";
import { Footer } from "../components/semantic/Footer";
import { ClearTodos } from "../components/ClearTodos";

function TodoContainer() {
    return (
        <>
            <Main />
            <Footer />
            <ClearTodos />
        </>
    );
}

export { TodoContainer };
