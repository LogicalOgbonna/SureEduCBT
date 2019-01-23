import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <div
      style={{ paddingTop: "10px" }}
      className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper"
      id="k_wrapper"
    >
      <div className="k-footer	k-grid__item k-grid k-grid--desktop k-grid--ver-desktop">
        <div className="k-footer__copyright">
          2018&nbsp;&copy;&nbsp;
          <Link
            to="http://keenthemes.com/keen"
            target="_blank"
            className="k-link"
            rel="noopener noreferrer"
          >
            Keenthemes
          </Link>
        </div>
        <div className="k-footer__menu">
          <Link
            to="http://keenthemes.com/keen"
            target="_blank"
            className="k-footer__menu-link k-link"
            rel="noopener noreferrer"
          >
            About
          </Link>
          <Link
            to="http://keenthemes.com/keen"
            target="_blank"
            className="k-footer__menu-link k-link"
            rel="noopener noreferrer"
          >
            Team
          </Link>
          <Link
            to="http://keenthemes.com/keen"
            target="_blank"
            className="k-footer__menu-link k-link"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
