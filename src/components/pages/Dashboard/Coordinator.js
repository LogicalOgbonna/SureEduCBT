import React from "react";
import Cards from "./Cards";
const Coordinator = props => {
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
        <div
          className="k-content__body	k-grid__item k-grid__item--fluid"
          id="k_content_body"
        >
          <div className="row">
            <div className="col-xl-4">
              <Cards
                icon="flaticon-rocket"
                name="Create Questions"
                link="/create-question"
              />
            </div>
            <div className="col-xl-4" />
            <div className="col-xl-4">
              <Cards
                icon="flaticon-bus-stop"
                name="Create Test"
                link="/create-test"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
