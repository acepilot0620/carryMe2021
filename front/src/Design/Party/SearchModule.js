import React, { Component } from 'react';
import './Styles.css';
import { Token01 } from '.';
import Slider from '@material-ui/core/Slider';

class SearchModule extends Component {
    render() {
        return (
            <div
                className = "divTop30">
            <h3
                className = "hSection">파티 메인 페이지</h3>
            <div
                className="searchModule">
                <div className = "filterName">
                    <p>제목 필터</p>
                    <input type="text"
                        className = "tokenLong"></input>
                </div>
                <div className = "filterTier">
                    <p>티어 필터</p>
                    <Token01></Token01>
                    <Slider
                        style={
                            {
                                position: "relative",
                                float: "left",
                                width: "30%",
                                margin: "0 auto",
                            }
                        }></Slider>
                    <Token01></Token01>
                </div>
                <div className = "filterSex">
                    <p>나이 필터</p>
                    <input type = "checkbox"
                        style = {
                            {
                                display: "inline"
                            }
                        }></input>
                    <p
                        style = {
                            {
                                display: "inline"
                            }
                        }>남자만</p>
                    <input type = "checkbox"
                        style = {
                            {
                                display: "inline"
                            }
                        }></input>
                    <p
                        style = {
                            {
                                display: "inline"
                            }
                        }>여자만</p>
                    <input type = "checkbox"
                        style = {
                            {
                                display: "inline"
                            }
                        }></input>
                    <p
                        style = {
                            {
                                display: "inline"
                            }
                        }>상관 없음</p>
                </div>
                <div className = "filterAge">
                    <p>나이 필터</p>
                    <Token01></Token01>
                    <Slider
                        style={
                            {
                                position: "relative",
                                float: "left",
                                width: "30%",
                                margin: "0 auto",
                            }
                        }></Slider>
                    <Token01></Token01>
                </div>
                <div className = "filterPosition">
                    <p>포지션 필터</p>
                    <button className = "buttonPosition">ALL</button>
                    <button className = "buttonPosition">TOP</button>
                    <button className = "buttonPosition">JGL</button>
                    <button className = "buttonPosition">MID</button>
                    <button className = "buttonPosition">ADC</button>
                    <button className = "buttonPosition">SUP</button>
                </div>
                <div className = "filterSearch">
                    <button
                        className = "token"
                        style = {
                            {
                                position: "relative",
                                float: "right"
                            }
                        }>검색</button>
                </div>
            </div></div>
        );
    }
}

export default SearchModule;