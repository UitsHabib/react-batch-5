import React from "react";

import Counter from "./common/counter.component";
import Button from "./common/button.component";
import Header from "./common/header.component";

class Counters extends React.Component {
    state = {
        numbers: []
    }

    constructor() {
        super();

        console.log('Mounting phase - the constructor called first');
    }

    addCounter = () => {
        this.setState({ numbers: [...this.state.numbers, 0] });
    }

    increment = (index) => {
        const numbers = [...this.state.numbers];
        numbers[index]++;

        this.setState({ numbers });
    }

    decrement = (index) => {
        const numbers = [...this.state.numbers];
        numbers[index]--;

        this.setState({ numbers });
    }

    reset = (index) => {
        const numbers = [...this.state.numbers];
        numbers[index] = 0;

        this.setState({ numbers });;
    }

    delete = (index) => {
        const numbers = [...this.state.numbers];
        numbers.splice(index, 1);
        this.setState({ numbers });
    }

    componentDidMount() {
        console.log('Mounting phase - the componentDidMount called third');
    }

    componentDidUpdate() {
        console.log('Updating phase - the componentDidUpdate called second')
    }

    render() {
        console.log('Mounting phase or Updating phase - the render called second in mounting or first in updating phase');
        return (
            <div className="card container">
                <Header />

                <div className="card-body">
                    <Button 
                        event={this.addCounter}
                        className="btn btn-outline-success mx-3"
                        text="Add Counter"
                    />

                    <hr></hr>

                    {
                        this.state.numbers.map((number, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Counter 
                                        index={index}
                                        number={this.state.numbers[index]}
                                        onIncrement={this.increment}
                                        onDecrement={this.decrement}
                                        onReset={this.reset}
                                        onDelete={this.delete}
                                    />
                                    <br/>
                                </React.Fragment>
                            );
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

export default Counters;

{/* <Routes>
                    <Route path="" />
                </Routes> */}
/*
    1. babel helps to transpile the jsx codes to javascript
    2. props pass to the child component from the parent component
    3. state set, render method will be called again
    4. events -> onClick (event fire, event raise)
    5. life cycle phases of react component:
        a. Mounting phase
            i. constructor
            ii. render
            iii. componentDidMount
        b. Updating phase (state or props changes)
            i. render
            ii. componentDidUpdate
        c. Unmounting phase
            i. componentWillUnmount
    6. virtual dom
*/