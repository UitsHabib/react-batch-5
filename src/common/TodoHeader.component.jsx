import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './button.component';

const TodoHeader = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="card-header text-center">
                <h1>Todo App</h1>
            </div>

            <div className="card-body text-center">
                <Button 
                    text="Add"
                    className="btn btn-primary"
                    event={() => navigate("/todos/add")}
                />
            </div>
            <br/>

            <div className="text-center">
                <h3>
                <u>Todo List</u>
                </h3>
            </div>
        </>
    );
}
 
export default TodoHeader;