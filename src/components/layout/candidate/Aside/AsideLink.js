import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AsideLink = ({ link, name, icon }) => {
  return (
    <li className="k-menu__item " aria-haspopup="true">
      <Link to={link} className="k-menu__link ">
        <i className={`k-menu__link-icon  ${icon}`} />
        <span className="k-menu__link-text">{name}</span>
      </Link>
    </li>
  );
};

AsideLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default AsideLink;
