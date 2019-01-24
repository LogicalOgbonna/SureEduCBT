import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Dashboard,
  RegisterOrganization,
  CreateQuestion,
  SignIn
} from "./components/pages/user";
import { Nav, Footer, Aside } from "./components/layout/user";
import {
  CandidateFooter,
  CandidateNav,
  CandidateAside
} from "./components/layout/candidate";
import { GuestRoute, UserRoute, CandidateRoute } from "./routes";

class App extends Component {
  render() {
    const {
      user: { user, candidate },
      location
    } = this.props;
    return (
      <div className="app">
        {user && user.isAuthenticated && <Nav />}
        {user && user.isAuthenticated && <Aside />}
        {candidate && candidate.isAuthenticated && <CandidateNav />}
        {candidate && candidate.isAuthenticated && <CandidateAside />}
        <GuestRoute
          path="/"
          location={location}
          exact
          component={SignIn}
          isAuthenticated={user.isAuthenticated}
        />
        <UserRoute
          path="/register-organization"
          location={location}
          exact
          component={RegisterOrganization}
          isAuthenticated={user.isAuthenticated}
        />

        <UserRoute
          path="/dashboard"
          location={location}
          exact
          component={Dashboard}
          isAuthenticated={user.isAuthenticated}
        />
        <UserRoute
          path="/create-question"
          location={location}
          exact
          component={CreateQuestion}
          isAuthenticated={user.isAuthenticated}
        />

        <CandidateRoute
          path="/candidate-dashboard"
          location={location}
          exact
          component={SignIn}
          isAuthenticated={candidate.isAuthenticated}
        />
        {user && user.isAuthenticated && <Footer />}
        {candidate && candidate.isAuthenticated && <CandidateFooter />}
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
