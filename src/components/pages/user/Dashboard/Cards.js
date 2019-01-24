import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cards = ({ icon, name, link }) => {
  return (
    <div className="k-portlet">
      <Link to={link} className="k-iconbox">
        <div className="k-iconbox__icon">
          <div className="k-iconbox__icon-bg" />
          <i className={icon} />
        </div>
        <div className="k-iconbox__title">{name}</div>
      </Link>
    </div>
  );
};

Cards.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Cards;
