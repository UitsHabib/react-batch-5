import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./AddTodo.component";
import Counters from "./Counters.component";
import Login from "./login.component";
import TodoList from "./TodoList.component";

class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/counters" element={<Counters />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/todos/add" element={<AddTodo />} />
                </Routes>
            </>
        );
    }
}

export default App;
