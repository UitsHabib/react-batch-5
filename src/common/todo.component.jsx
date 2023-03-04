import React, { Component } from 'react';
import Button from './button.component';

class Todo extends Component {
    render() { 
        return (
            <div className='mt-5 d-flex card-body border'>
                <h3>{ this.props.todo }</h3>
                <Button 
                    text="Edit"
                    className="btn btn-primary mx-2"
                />
                <Button 
                    text="Delete"
                    className="btn btn-danger mx-2"
                />
                
            </div>
        );
    }
}

 
export default Todo;