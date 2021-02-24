import React, { Component } from 'react';
import './Styles.css';
import { ItemPartyUser } from ".";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ItemParty extends Component {
    state = {
        partyInfo: {
            title: "",
            time: 0,
            user: {
                top: {
                    tier: "골드",
                    nick: "갱안오면 던짐"
                },
                mid: {
                    tier: "",
                    nick: ""
                },
                jgl: {
                    tier: "",
                    nick: ""
                },
                adc: {
                    tier: "플레티넘",
                    nick: "도구는 도구다"
                },
                sup: {
                    tier: "다이아",
                    nick: "도구의 삶이란"
                }
            }
        }
    }
    componentWillMount() {
        this.state.partyInfo.title = this.props.title
    }
    render() {
        return (
            <div
                className = "itemParty">
                <div
                    style = {{
                        width: "50%",
                        height: "100%",
                        float: "left"
                    }}>
                    <p className = "itemPartyTitle">{this.state.partyInfo.title}</p>
                    <ItemPartyUser position = "TOP" user = {this.state.partyInfo.user.top}></ItemPartyUser>
                    <ItemPartyUser position = "MID" user = {this.state.partyInfo.user.mid}></ItemPartyUser>
                    <ItemPartyUser position = "JGL" user = {this.state.partyInfo.user.jgl}></ItemPartyUser>
                </div>
                <div
                    style = {{
                        width: "50%",
                        height: "100%",
                        float: "right"
                    }}>
                    <p className = "itemPartyTime">{this.state.partyInfo.time}분 전</p>
                    <ItemPartyUser position = "ADC" user = {this.state.partyInfo.user.adc}></ItemPartyUser>
                    <ItemPartyUser position = "SUP" user = {this.state.partyInfo.user.sup}></ItemPartyUser>
                    <Link to = {{
                        pathname: "/party/" + this.state.partyInfo.title,
                        state: {
                            partyInfo: this.partyInfo
                        }
                    }}>입장</Link>
                </div>
                
            </div>
        );
    }
}
export default ItemParty;