import React from "react";
import { Link } from "react-router-dom";

const Register = props => {
  return (
    <div
      style={{ marginTop: "0", paddingTop: "0px" }}
      className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper"
      id="k_wrapper"
    >
      <div
        className="k-content	k-grid__item k-grid__item--fluid k-grid k-grid--hor"
        id="k_content"
      >
        {/* <!-- begin:: Content Head --> */}
        <div className="k-content__head	k-grid__item">
          <div className="k-content__head-main">
            <h3 className="k-content__head-title">Dashboard</h3>
            <div className="k-content__head-breadcrumbs">
              <Link to="#" className="k-content__head-breadcrumb-home">
                <i className="flaticon2-shelter" />
              </Link>
              <span className="k-content__head-breadcrumb-separator" />
              <Link to="" className="k-content__head-breadcrumb-link">
                Dashboards
              </Link>
              <span className="k-content__head-breadcrumb-separator" />
              <Link to="" className="k-content__head-breadcrumb-link">
                Navy Aside
              </Link>

              {/* <!-- <span className="k-content__head-breadcrumb-link k-content__head-breadcrumb-link--active">Active link</span> --> */}
            </div>
          </div>
          <div className="k-content__head-toolbar">
            <div className="k-content__head-wrapper">
              <div
                className="dropdown dropdown-inline k-hide"
                data-toggle="k-tooltip"
                title="Quick actions"
                data-placement="left"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-elevate btn-danger btn-bold btn-upper dropdown-toggle-"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link className="dropdown-item" to="#">
                    <i className="la la-plus" /> New Report
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="la la-user" /> Add Customer
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="la la-cloud-download" /> New Download
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    <i className="la la-cog" /> Settings
                  </Link>
                </div>
              </div>
              <Link
                to="#"
                className="btn btn-sm btn-elevate btn-brand"
                id="k_dashboard_daterangepicker"
                data-toggle="k-tooltip"
                title="Select dashboard daterange"
                data-placement="left"
              >
                <span
                  className="k-opacity-7"
                  id="k_dashboard_daterangepicker_title"
                >
                  Today
                </span>
                &nbsp;
                <span
                  className="k-font-bold"
                  id="k_dashboard_daterangepicker_date"
                >
                  Aug 16
                </span>
                <i className="flaticon-calendar-with-a-clock-time-tools k-padding-l-5 k-padding-r-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- end:: Content Head --> */}
      </div>
    </div>
  );
};

export default Register;
