import React, { Component } from 'react';
import './Styles.css';
import { ItemParty } from '.';

class SearchResultModule extends Component {
    state = {
        parties: [
            "하나",
            "둘",
            "셋",
            "넷",
            "다섯",
            "여섯",
            "일곱"
        ]
    }
    spawnParties = () => {
        const { parties } = this.state;
        return (
            parties.map((value, index) => (
                <ItemParty title={value}></ItemParty>
            ))
        );
    }

    render() {
        return (
            <div
                className="searchResultModule">
                {this.spawnParties()}
            </div>
        );
    }
}

export default SearchResultModule;