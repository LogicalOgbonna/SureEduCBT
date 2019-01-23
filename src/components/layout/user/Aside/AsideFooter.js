import React from "react";
import { Link } from "react-router-dom";

const AsideFooter = () => {
  return (
    <div className="k-aside__footer		k-grid__item" id="k_aside_footer">
      <div className="k-aside__footer-nav">
        <div className="k-aside__footer-item">
          <Link to="#" className="btn btn-icon">
            <i className="flaticon2-gear" />
          </Link>
        </div>
        <div className="k-aside__footer-item">
          <Link to="#" className="btn btn-icon">
            <i className="flaticon2-cube" />
          </Link>
        </div>
        <div className="k-aside__footer-item">
          <Link to="#" className="btn btn-icon">
            <i className="flaticon2-bell-alarm-symbol" />
          </Link>
        </div>
        <div className="k-aside__footer-item">
          <button
            type="button"
            className="btn btn-icon"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="flaticon2-add" />
          </button>
          <div className="dropdown-menu dropdown-menu-left">
            <ul className="k-nav">
              <li className="k-nav__section k-nav__section--first">
                <span className="k-nav__section-text">Export Tools</span>
              </li>
              <li className="k-nav__item">
                <Link to="#" className="k-nav__link">
                  <i className="k-nav__link-icon la la-print" />
                  <span className="k-nav__link-text">Print</span>
                </Link>
              </li>
              <li className="k-nav__item">
                <Link to="#" className="k-nav__link">
                  <i className="k-nav__link-icon la la-copy" />
                  <span className="k-nav__link-text">Copy</span>
                </Link>
              </li>
              <li className="k-nav__item">
                <Link to="#" className="k-nav__link">
                  <i className="k-nav__link-icon la la-file-excel-o" />
                  <span className="k-nav__link-text">Excel</span>
                </Link>
              </li>
              <li className="k-nav__item">
                <Link to="#" className="k-nav__link">
                  <i className="k-nav__link-icon la la-file-text-o" />
                  <span className="k-nav__link-text">CSV</span>
                </Link>
              </li>
              <li className="k-nav__item">
                <Link to="#" className="k-nav__link">
                  <i className="k-nav__link-icon la la-file-pdf-o" />
                  <span className="k-nav__link-text">PDF</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="k-aside__footer-item">
          <Link to="#" className="btn btn-icon">
            <i className="flaticon2-calendar-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsideFooter;
