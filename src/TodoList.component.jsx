import React, { useState, useEffect } from 'react';
import Todo from './common/todo.component';
import TodoHeader from './common/TodoHeader.component';
import axios from 'axios';

function TodoList () {
    const [todoList, setTodoList] = useState([]); 

    useEffect(() => {
        async function getTodos() {
            try {
                const res = await axios.get('https://dummyjson.com/todos/user/1?limit=0');
    
                console.log(res.data.todos);
    
                setTodoList(res.data.todos);
            }
            catch(err) {
                console.log(err);
                alert('Error happened');
            }
        }

        getTodos();
    }, []);

    
    return (
        <div className='container'>
            <div className='card'>
                <TodoHeader />

                {
                    todoList.map((todo, index) => {
                        return <Todo key={index} todo={todo.todo}/>
                    })
                }
            </div>
        </div>
    );
}
 
export default TodoList;