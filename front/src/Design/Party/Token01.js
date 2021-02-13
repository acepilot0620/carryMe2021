import React, { Component } from 'react';
import './Styles.css';

class Token01 extends Component {
    render () {
        return (
            <div
                className = "token01">
                    <image
                        className = "token01Img"></image>
                    <p
                        className = "token01Text">토큰</p>
            </div>
        );
    }
}
export default Token01;