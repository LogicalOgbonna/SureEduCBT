import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Nav = props => {
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
          {/* <!--begin: Notifications --> */}
          <div className="k-header__topbar-item dropdown">
            <div
              className="k-header__topbar-wrapper"
              data-toggle="dropdown"
              data-offset="30px -2px"
            >
              <span className="k-header__topbar-icon">
                <i className="flaticon2-bell-alarm-symbol" />
              </span>
              <span className="k-badge k-badge--dot k-badge--notify k-badge--sm k-badge--brand" />
            </div>
            <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
              <div
                className="k-head"
                style={{
                  backgroundImage: "url(../assets/media/misc/head_bg_sm.jpg)"
                }}
              >
                <h3 className="k-head__title">User Notifications</h3>
                <div className="k-head__sub">
                  <span className="k-head__desc">23 new notifications</span>
                </div>
              </div>
              <div
                className="k-notification k-margin-t-30 k-margin-b-20 k-scroll"
                data-scroll="true"
                data-height="270"
                data-mobile-height="220"
              >
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-line-chart k-font-success" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New order has been received
                    </div>
                    <div className="k-notification__item-time">2 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-box-1 k-font-brand" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New customer is registered
                    </div>
                    <div className="k-notification__item-time">3 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-chart2 k-font-danger" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      Application has been approved
                    </div>
                    <div className="k-notification__item-time">3 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-image-file k-font-warning" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New file has been uploaded
                    </div>
                    <div className="k-notification__item-time">5 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-bar-chart k-font-info" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New user feedback received
                    </div>
                    <div className="k-notification__item-time">8 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-pie-chart-2 k-font-success" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      System reboot has been successfully completed
                    </div>
                    <div className="k-notification__item-time">12 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-favourite k-font-focus" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New order has been placed
                    </div>
                    <div className="k-notification__item-time">15 hrs ago</div>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="k-notification__item k-notification__item--read"
                >
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-safe k-font-primary" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      Company meeting canceled
                    </div>
                    <div className="k-notification__item-time">19 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-psd k-font-success" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New report has been received
                    </div>
                    <div className="k-notification__item-time">23 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon-download-1 k-font-danger" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      Finance report has been generated
                    </div>
                    <div className="k-notification__item-time">25 hrs ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon-security k-font-warning" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New customer comment recieved
                    </div>
                    <div className="k-notification__item-time">2 days ago</div>
                  </div>
                </Link>
                <Link to="#" className="k-notification__item">
                  <div className="k-notification__item-icon">
                    <i className="flaticon2-pie-chart k-font-focus" />
                  </div>
                  <div className="k-notification__item-details">
                    <div className="k-notification__item-title">
                      New customer is registered
                    </div>
                    <div className="k-notification__item-time">3 days ago</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!--end: Notifications --> */}

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
                  <Link
                    to="custom_user_login-v2.html"
                    target="_blank"
                    className="btn btn-outline-metal btn-hover-brand btn-upper btn-font-dark btn-sm btn-bold"
                  >
                    Sign Out
                  </Link>
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

export default Nav;
