import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PageMain } from "./Main";
import { PagePartyMain, PagePartyDetail } from "./Party";
import { PageLeagueMain } from "./League";
import "./Styles.css";

const Header = (props) => {
  return (
    <div className="header">
      <Router>
        <Route exact path="/" component={PageMain} />
        <Route exact path="/party" render={() => <PagePartyMain />} />
        <Route exact path="/league" render={() => <PageLeagueMain />} />
        <Route
          path="/party/:partyTitle"
          render={({ location }) => (
            <PagePartyDetail partyInfo={location.state.partyInfo} />
          )}
        />
      </Router>
    </div>
  );
};

export default Header;
