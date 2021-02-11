import React, { Component } from 'react';
import { RankListItem } from ".";
import './Styles.css';

class RankList extends Component {
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
                    "길드 1",
                    "길드 2",
                    "길드 3",
                    "길드 4",
                    "길드 5"
                ]
            }
        )
    }

    renderLists = () => {
        const { items } = this.state;
        return (
            items.map((item) => (
                <tr>
                    <RankListItem></RankListItem>
                </tr>
            ))
        )
    }

    render() {
        return (
            <div
                className="rankList">
                <h3>길드 순위</h3>
                <table>
                    <tbody>
                        {
                            this.renderLists()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default RankList;