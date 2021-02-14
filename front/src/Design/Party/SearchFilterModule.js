import React, { Component } from 'react';
import './Styles.css';
import {Token02} from '.';

class SearchFilterModule extends Component {
    state = {
        searchFilterModule: {
            1: "현재 인원",
            2: "평균 티어",
            3: "최고 티어",
            4: "생성 시간"
        }
    }
    render() {
        return (
            <div    
                className = "searchFilterModule">
                <Token02 type = {this.state.searchFilterModule[1]}></Token02>
                <Token02 type = {this.state.searchFilterModule[2]}></Token02>
                <Token02 type = {this.state.searchFilterModule[3]}></Token02>
                <Token02 type = {this.state.searchFilterModule[4]}></Token02>
            </div>
        );
    }
}

export default SearchFilterModule;