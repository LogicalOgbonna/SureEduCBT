import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Dashboard,
  RegisterOrganization,
  CreateQuestion,
  SignIn
} from "./components/pages";
import { Nav, Footer, Aside } from "./components/layout/user";
import { GuestRoute, UserRoute } from "./routes";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="app">
        {user.isAuthenticated && <Nav />}
        {user.isAuthenticated && <Aside />}
        <GuestRoute
          path="/"
          location={this.props.location}
          exact
          component={SignIn}
          isAuthenticated={user.isAuthenticated}
        />
        <UserRoute
          path="/register-organization"
          location={this.props.location}
          exact
          component={RegisterOrganization}
          isAuthenticated={user.isAuthenticated}
        />

        {/* TODO: Make Dashboard a Private Route */}
        <UserRoute
          path="/dashboard"
          location={this.props.location}
          exact
          component={Dashboard}
          isAuthenticated={user.isAuthenticated}
        />
        <UserRoute
          path="/create-question"
          location={this.props.location}
          exact
          component={CreateQuestion}
          isAuthenticated={user.isAuthenticated}
        />
        {user.isAuthenticated && <Footer />}
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
