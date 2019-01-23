import React from "react";
import { connect } from "react-redux";

import Admin from "./Admin";
import Coordinator from "./Coordinator";
import Examiner from "./Examiner";

const Dashboard = ({ role }) => {
  return (
    <React.Fragment>
      {role === "Admin" && <Admin />}
      {role === "Coordinator" && <Coordinator />}
      {role === "Examiner" && <Examiner />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  role: state.user.user.role
});

export default connect(mapStateToProps)(Dashboard);
