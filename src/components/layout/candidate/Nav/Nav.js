import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { connect } from "react-redux";
import { logout } from "../../../../actions/auth";

const Nav = ({ logout }) => {
  const userNav = (
    <div
      className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper"
      id="k_wrapper"
    >
      {/* <!-- begin:: Header --> */}
      <div id="k_header" className="k-header k-grid__item  k-header--fixed ">
        {/* <!-- begin: Header Menu --> */}
        <button
          className="k-header-menu-wrapper-close"
          id="k_header_menu_mobile_close_btn"
        >
          <i className="la la-close" />
        </button>
        {/* <!-- Nav Menu Start --> */}
        <NavMenu />
        {/* <!-- Nav Menu Start --> */}
        {/* <!-- end: Header Menu --> */}
        {/* <!-- begin:: Header Topbar --> */}
        <div className="k-header__topbar">
          {/* <!--begin: User bar --> */}
          <div className="k-header__topbar-item k-header__topbar-item--user">
            <div
              className="k-header__topbar-wrapper"
              data-toggle="dropdown"
              data-offset="10px -2px"
            >
              <div className="k-header__topbar-user">
                <span className="k-header__topbar-welcome k-hidden-mobile">
                  Hi,
                </span>
                <span className="k-header__topbar-username k-hidden-mobile">
                  Alex
                </span>
                <img alt="Pic" src="../assets/media/users/300_25.jpg" />

                {/* <!--use below badge element instead the user avatar to display username's first letter(remove k-hidden class to display it) --> */}
                <span className="k-badge k-badge--username k-badge--lg k-badge--brand k-hidden">
                  A
                </span>
              </div>
            </div>
            <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-md">
              <div
                className="k-user-card k-margin-b-50 k-margin-b-30-tablet-and-mobile"
                style={{
                  backgroundImage: "url(../assets/media/misc/head_bg_sm.jpg)"
                }}
              >
                <div className="k-user-card__wrapper">
                  <div className="k-user-card__pic">
                    <img alt="Pic" src="../assets/media/users/300_21.jpg" />
                  </div>
                  <div className="k-user-card__details">
                    <div className="k-user-card__name">Alex Stone</div>
                    <div className="k-user-card__position">CTO, Loop Inc.</div>
                  </div>
                </div>
              </div>
              <ul className="k-nav k-margin-b-10">
                <li className="k-nav__item">
                  <Link
                    to="custom_user_profile-v1.html"
                    className="k-nav__link"
                  >
                    <span className="k-nav__link-icon">
                      <i className="flaticon2-calendar-3" />
                    </span>
                    <span className="k-nav__link-text">My Profile</span>
                  </Link>
                </li>
                <li className="k-nav__item">
                  <Link
                    to="custom_user_profile-v1.html"
                    className="k-nav__link"
                  >
                    <span className="k-nav__link-icon">
                      <i className="flaticon2-browser-2" />
                    </span>
                    <span className="k-nav__link-text">My Tasks</span>
                  </Link>
                </li>
                <li className="k-nav__item">
                  <Link
                    to="custom_user_profile-v1.html"
                    className="k-nav__link"
                  >
                    <span className="k-nav__link-icon">
                      <i className="flaticon2-mail" />
                    </span>
                    <span className="k-nav__link-text">Messages</span>
                  </Link>
                </li>
                <li className="k-nav__item">
                  <Link
                    to="custom_user_profile-v1.html"
                    className="k-nav__link"
                  >
                    <span className="k-nav__link-icon">
                      <i className="flaticon2-gear" />
                    </span>
                    <span className="k-nav__link-text">Settings</span>
                  </Link>
                </li>
                <li className="k-nav__item k-nav__item--custom k-margin-t-15">
                  <button onClick={() => logout()} className="btn btn-primary">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* <!--end: User bar --> */}
        </div>
      </div>
    </div>
  );
  return <React.Fragment>{userNav}</React.Fragment>;
};

export default connect(
  null,
  { logout }
)(Nav);
