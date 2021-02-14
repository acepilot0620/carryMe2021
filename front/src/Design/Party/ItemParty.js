import React, { Component } from 'react';
import './Styles.css';
import { ItemPartyUser } from ".";

class ItemParty extends Component {
    state = {
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
    componentWillMount() {
        this.setState({
            title: this.props.title
        })
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
                    <p className = "itemPartyTitle">{this.state.title}</p>
                    <ItemPartyUser position = "TOP" user = {this.state.user.top}></ItemPartyUser>
                    <ItemPartyUser position = "MID" user = {this.state.user.mid}></ItemPartyUser>
                    <ItemPartyUser position = "JGL" user = {this.state.user.jgl}></ItemPartyUser>
                </div>
                <div
                    style = {{
                        width: "50%",
                        height: "100%",
                        float: "right"
                    }}>
                    <p className = "itemPartyTime">{this.state.time}분 전</p>
                    <ItemPartyUser position = "ADC" user = {this.state.user.adc}></ItemPartyUser>
                    <ItemPartyUser position = "SUP" user = {this.state.user.sup}></ItemPartyUser>
                </div>
                
            </div>
        );
    }
}
export default ItemParty;