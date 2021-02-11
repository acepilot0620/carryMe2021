import React, { Component } from 'react';
import { LeagueListItem } from ".";
import './Styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class LeagueList extends Component {
    state = {
        items: [
            1,
            2,
            3,
            4
        ]
    }
    componentWillMount() {
        this.setState(
            {
                items: [
                    "대회 1",
                    "대회 2",
                    "대회 3",
                    "대회 4"
                ]
            }
        )
    }

    renderLists = () => {
        const { items } = this.state;
        return (
            <tr>
                {

                    items.map((item) => (
                        <td>
                            <LeagueListItem></LeagueListItem>
                        </td>
                    ))
                }
            </tr>
        )
    }

    render() {
        return (
            <div
                className="leagueList">
                <h3>진행중인 대회</h3>
                <Link
                    className = "p"
                    to = "/league"
                >더 보기</Link>
                <table>
                    <tbody>
                        {
                            this.renderLists()
                        }
                        {
                            this.renderLists()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default LeagueList;