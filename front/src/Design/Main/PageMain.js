import React, { Component } from 'react';
import {BannerSwiper, PartyList, LeagueList} from '.';

class PageMain extends Component {
    render() {
        return (
            <div
                className = "pageMain">
                <BannerSwiper></BannerSwiper>
                <PartyList></PartyList>
                <LeagueList></LeagueList>
            </div>
        );
    }
}

export default PageMain;