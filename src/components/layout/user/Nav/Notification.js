import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Notification = ({ badge, link, name }) => {
  return (
    <React.Fragment>
      <li
        className="k-menu__item "
        data-kmenu-link-redirect="1"
        aria-haspopup="true"
      >
        <Link to={link} className="k-menu__link ">
          <i className="k-menu__link-bullet k-menu__link-bullet--dot">
            <span />
          </i>
          <span className="k-menu__link-text">{name}</span>
          <span className="k-menu__link-badge">
            {badge && <span className="k-badge k-badge--success">{badge}</span>}
          </span>
        </Link>
      </li>
    </React.Fragment>
  );
};

Notification.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  badge: PropTypes.string
};

export default Notification;
