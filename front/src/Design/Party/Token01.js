import React, { Component } from 'react';
import './Styles.css';

class Token01 extends Component {
    render() {
        return (
            <div
                className="token">
                <img
                    className = "tokenImg"
                    src='/Image/tier_ex.png'></img>
                <p
                    className="tokenText">토큰</p>
            </div>
        );
    }
}
export default Token01;