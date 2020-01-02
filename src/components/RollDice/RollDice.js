import React, { Component } from 'react'
import Die from '../Die/Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {number1: "one",number2: "one"}
        this.getRandNumber  = this.getRandNumber.bind(this);
        this.values = ["one","two","three","four","five","six"]
        
    }

    getRandNumber() {
        let randIndex1 = Math.floor((Math.random() * this.values.length) + 1 );
        let randIndex2 = Math.floor((Math.random() * this.values.length) + 1 );
        this.setState({number: this.values[randIndex1],number2: this.values[randIndex2] })
    }
   
    render() {

        return(
            <div>
                <h1>{this.state.number2}</h1>
                <div>
                    <Die number={this.state.number1}></Die>
                    <Die number={this.state.number2}></Die>
                </div>
                <button onClick={this.getRandNumber}>Roll Dice </button>
            </div>
        );
    }
}

export default RollDice;