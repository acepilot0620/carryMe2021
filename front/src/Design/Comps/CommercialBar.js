import React, { Component } from 'react';
import {RankList} from '.';
import './Styles.css';

class CommercialBar extends Component {
    render () {
        return (
            <nav
                className = "commercialBar">
                    <RankList></RankList>
            </nav>
        );
    }
}
export default CommercialBar;