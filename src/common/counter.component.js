import React, { Component } from 'react';

import Button from "./button.component";

class Counter extends Component {

    componentWillUnmount() {
        console.log('Unmounting phase - the componentWillUnmount called first');
    }

    render() { 
        return (
            <div className="d-flex">
                <Button 
                    event={() => this.props.onReset(this.props.index)}
                    className="btn btn-success mx-3"
                    text="Reset"
                />
                
                <Button 
                    event={() => this.props.onDecrement(this.props.index)}
                    className="btn btn-warning mx-3"
                    text="Dec (-)"
                    disabled={this.props.number === 0}
                />

                <h2 className="my-2">{this.props.number}</h2>

                <Button 
                    event={() => this.props.onIncrement(this.props.index)}
                    className="btn btn-info mx-3"
                    text="Inc (+)"
                />

                <Button 
                    className="btn btn-danger mx-3"
                    text="Delete"
                    event={() => this.props.onDelete(this.props.index)}
                />
            </div>
        );
    }
}
 
export default Counter;