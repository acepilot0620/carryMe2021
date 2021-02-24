import React, { Component } from 'react';
import './Styles.css';
class PagePartyDetail extends Component {
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
    render() {
        return (
            <div className = "pagePartyDetail">
                파티 세부 페이지
            </div>
        )
    }
}

export default PagePartyDetail;