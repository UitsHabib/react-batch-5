import React, { Component } from 'react';

class Input extends Component {
    render() { 
        const { id, type, value, event } = this.props;

        return (
            <input 
                id={id} 
                type={type}
                className="form-control" 
                value={value} 
                onChange={event}
                autocomplete="off"
            />
        );
    }
}
 
export default Input;