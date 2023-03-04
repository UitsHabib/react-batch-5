import React, { Component } from 'react';
import Button from './common/button.component';
import Todo from './common/todo.component';
import TodoHeader from './common/TodoHeader.component';
import axios from 'axios';

class TodoList extends Component {
    state = {
        todoList: []
    } 

    componentDidMount() {
        
        axios.get('https://dummyjson.com/todos')
            .then(res => {
                console.log(res.data.todos)
                this.setState({ todoList: res.data.todos });
            })
            .catch(err => {
                console.log(err);
                alert("An error occured");
            })

    }

    render() { 
        return (
            <div className='container'>
                <div className='card'>
                    <TodoHeader />

                    {
                        this.state.todoList.map((todo, index) => {
                            return <Todo todo={todo.todo}/>
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default TodoList;