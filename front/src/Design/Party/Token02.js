import React, { Component } from 'react';
import './Styles.css';

class Token02 extends Component {
    state = {
        type: ""
    }

    componentWillMount() {
        this.setState(
            {
                type: this.props.type
            }
        )
    }

    render() {
        return (
            <div
                className = "token">
                <p className = "tokenText">{this.state.type}</p>
                <img
                    className = "tokenArrow"
                    src = '/Image/filter_up.png'></img>
            </div>
        );
    }
}

export default Token02;