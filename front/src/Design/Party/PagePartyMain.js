import React, { Component } from 'react';
import './Styles.css';
import {SearchModule, SearchFilterModule, SearchResultModule} from '.';

class PagePartyMain extends Component {
    render() {
        return (
            <div
                className="pagePartyMain">
                <SearchModule></SearchModule>
                <hr className = "lineDivide"></hr>
                <SearchFilterModule></SearchFilterModule>
                <hr className = "lineDivide"></hr>
                <SearchResultModule></SearchResultModule>
            </div>
        );
    }
}

export default PagePartyMain;