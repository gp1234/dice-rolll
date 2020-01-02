import React, { Component } from 'react'
import './Die.css';

class Die extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <i className={`fas fa-dice-${this.props.number}`}></i>
        );
    }

    static defaultProps = {
        number: "one"
    }
}

export default Die;