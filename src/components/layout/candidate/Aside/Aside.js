import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../logos/logo-5.png";
import AsideFooter from "./AsideFooter";
import AsideLink from "./AsideLink";

const Aside = ({ role }) => {
  const AdminAside = (
    <React.Fragment>
      <AsideLink link="/dashboard" icon="flaticon-layers" name="Dashboard" />

      <AsideLink
        link="/register-organization"
        icon="flaticon-layers"
        name="Register Organization"
      />
      <AsideLink
        link="/create-coordinator"
        icon="flaticon2-gear"
        name="Create Coordinatorn"
      />
      <AsideLink
        link="/create-examination"
        icon="flaticon2-gear"
        name="Create Examination"
      />

      <AsideLink link="/create-tag" icon="flaticon2-gear" name="Create Tag" />

      <AsideLink link="/create-test" icon="flaticon2-gear" name="Create Test" />
    </React.Fragment>
  );

  const ExaminerAside = (
    <React.Fragment>
      <AsideLink link="/dashboard" icon="flaticon-layers" name="Dashboard" />

      <AsideLink
        link="/approve-test"
        icon="flaticon2-gear"
        name="Approve Test"
      />

      <AsideLink
        link="/register-candidate"
        icon="flaticon2-gear"
        name="Register Candidate"
      />
    </React.Fragment>
  );

  const CoordinatorAside = (
    <React.Fragment>
      <AsideLink link="/dashboard" icon="flaticon-layers" name="Dashboard" />

      <AsideLink
        link="/create-question"
        icon="flaticon2-gear"
        name="Create Question"
      />

      <AsideLink link="/create-test" icon="flaticon2-gear" name="Create Test" />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {/* <!-- begin:: Header Mobile --> */}
      <div
        id="k_header_mobile"
        className="k-header-mobile  k-header-mobile--fixed "
      >
        <div className="k-header-mobile__logo">
          <Link to="index.html">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="k-header-mobile__toolbar">
          <button
            className="k-header-mobile__toolbar-toggler k-header-mobile__toolbar-toggler--left"
            id="k_aside_mobile_toggler"
          >
            <span />
          </button>
          <button
            className="k-header-mobile__toolbar-toggler"
            id="k_header_mobile_toggler"
          >
            <span />
          </button>
          <button
            className="k-header-mobile__toolbar-topbar-toggler"
            id="k_header_mobile_topbar_toggler"
          >
            <i className="flaticon-more" />
          </button>
        </div>
      </div>
      {/* <!-- end:: Header Mobile --> */}

      <div className="k-grid k-grid--hor k-grid--root">
        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
          {/* <!-- begin:: Aside --> */}
          <button className="k-aside-close " id="k_aside_close_btn">
            <i className="la la-close" />
          </button>
          <div
            className="k-aside 	k-grid__item k-grid k-grid--desktop k-grid--hor-desktop"
            id="k_aside"
          >
            {/* <!-- begin:: Aside --> */}
            <div className="k-aside__brand	k-grid__item " id="k_aside_brand">
              <div className="k-aside__brand-logo">
                <Link to="index.html">
                  <img alt="Logo" src={logo} />
                </Link>
              </div>
              <div className="k-aside__brand-tools">
                <button
                  className="k-aside__brand-aside-toggler k-aside__brand-aside-toggler--left"
                  id="k_aside_toggler"
                >
                  <span />
                </button>
              </div>
            </div>
            <div
              className="k-aside-menu-wrapper	k-grid__item k-grid__item--fluid"
              id="k_aside_menu_wrapper"
            >
              <div
                id="k_aside_menu"
                className="k-aside-menu "
                data-kmenu-vertical="1"
                data-kmenu-scroll="1"
                data-kmenu-dropdown-timeout="500"
              >
                <ul className="k-menu__nav ">
                  {role === "Admin" && AdminAside}
                  {role === "Coordinator" && CoordinatorAside}
                  {role === "Examiner" && ExaminerAside}
                </ul>
              </div>
            </div>

            <AsideFooter />

            {/* <!-- end:: Aside --> */}
          </div>

          {/* <!-- end:: Aside --> */}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  role: state.user.user.role
});

export default connect(mapStateToProps)(Aside);
