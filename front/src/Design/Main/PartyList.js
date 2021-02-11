import React, { Component } from 'react';
import { PartyListItem } from ".";
import './Styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PartyList extends Component {
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
                    "파티 1",
                    "파티 2",
                    "파티 3",
                    "파티 4"
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
                            <PartyListItem></PartyListItem>
                        </td>
                    ))
                }
            </tr>
        )
    }

    render() {
        return (
            <div
                className="partyList">
                <h3>실시간 파티</h3>
                <Link
                    className = "p"
                    to = "/party"
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
export default PartyList;