import React, { Component } from 'react';
import './Styles.css';
import {SearchModule} from '.';

class PagePartyMain extends Component {
    render() {
        return (
            <div
                className="pagePartyMain">
                <SearchModule></SearchModule>
            </div>
        );
    }
}

export default PagePartyMain;