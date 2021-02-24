import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageMain } from './Main';
import { PagePartyMain, PagePartyDetail } from './Party';
import { PageLeagueMain} from './League';
import './Styles.css';
class Header extends Component {

  render() {
    return (
      <div
        className="header">
        <Router>
          <Route exact path='/' component={PageMain} />
          <Route exact path = '/party'
            render = {() => (<PagePartyMain></PagePartyMain>)}></Route>
          <Route exact path = '/league'
            render = {() => (<PageLeagueMain></PageLeagueMain>)}></Route>
            <Route path = '/party/:partyTitle'
            render = {({location}) => <PagePartyDetail partyInfo = {location.state.partyInfo}></PagePartyDetail>}></Route>
        </Router>
      </div>
    );
  }
}
export default Header;