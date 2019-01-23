import React from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import { connect } from "react-redux";

import SelectListGroup from "../../common/SelectListGroup";
// import Select from "react-select";

class CreateQuestion extends React.Component {
  state = {
    questionType: "",
    question: "",
    dynamic: [],
    options: [],
    answers: [],
    isCorect: false,
    mark: "",
    questionImage: null
  };

  onChange = (e, id) => {
    this.setState({ ...this.state, [e.target.name]: [e.target.value] });
  };

  addImage = event => {
    const questionImage = event.target.files[0];
    if (questionImage) {
      this.setState({ questionImage });
    }
  };
  addOption = () => {
    this.setState({ dynamic: [...this.state.dynamic, ""] });
  };

  render() {
    const questionOptions = [
      {
        label: "Select Question Type",
        value: 0
      },
      {
        label: "Multiple Answer Objective",
        value: "Multiple Answer Objective"
      },
      {
        label: "Single Ansswer Objective",
        value: "Single Ansswer Objective"
      },
      {
        label: "Sub-bjective",
        value: "Sub-Objective"
      }
    ];

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
            <DecoratedForm questionOptions={questionOptions} />
          </div>
        </div>
      </div>
    );
  }
}

const renderFormField = ({
  input,
  label,
  type,
  placeholder,
  info,
  row,
  name,
  options,
  meta: { touched, error }
}) => {
  if (type === "select") {
    return (
      <React.Fragment>
        <label htmlFor={input.id} class="form-control-label">
          {label}
        </label>
        <select class="form-control" {...input}>
          {options.map(option => (
            <option value={option.value}>{option.label} </option>
          ))}
        </select>
      </React.Fragment>
    );
  }

  if (type === "textarea") {
    return (
      <React.Fragment>
        <div class="col-lg-12">
          <label htmlFor={input.id} class="form-control-label">
            {label}
          </label>
        </div>
        <div class="col-lg-12">
          <textarea
            class="form-control"
            type={type}
            name="question"
            placeholder="Type your questions here"
            rows={row}
            {...input}
          />
          <span class="form-text text-muted">{info}</span>
        </div>
      </React.Fragment>
    );
  }
  if (type === "radio") {
    return (
      <div class="k-radio-inline col-lg-4 form-group-sub">
        <div style={{ marginTop: "25px" }} />
        <label class=" form-control-label k-radio">
          <input
            type={type}
            name={name}
            class="k-radio"
            style={{ paddingTop: "10px" }}
          />
          {label}
          <span />
        </label>
      </div>
    );
  }
  // if (type === "text") {
  return (
    <div class="form-group row">
      <div class="col-lg-12">
        <label class="form-control-label" htlmfor={input.id}>
          {label}
        </label>
        <input
          type={type}
          name="mark"
          class="form-control"
          placeholder={placeholder}
          {...input}
        />
      </div>
    </div>
  );
  // }
};

const renderAdd = (item, index, fields) => {
  const answerOption = [
    { label: "Select Option", value: 0 },
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" }
  ];
  const onClick = e => {
    e.preventDefault();
    fields.remove(index);
  };

  return (
    <React.Fragment key={index}>
      <div class="form-group row">
        <div class="col-lg-4 form-group-sub">
          <Field
            component={renderFormField}
            type="select"
            label="Select Option: *"
            options={answerOption}
            name="option"
            placeholder="Select"
          />
        </div>

        <div class="col-lg-4 form-group-sub">
          <Field
            component={renderFormField}
            label="Answer: *"
            type="text"
            name="answers"
            placeholder="Enter an anser"
          />
        </div>

        <div class="k-radio-inline col-lg-4 form-group-sub">
          <div style={{ marginTop: "25px" }} />
          <Field
            component={renderFormField}
            label="Corect?:"
            name="isCorect"
            type="radio"
          />
        </div>
      </div>
      <button
        class="btn"
        style={{ paddingTop: "0px", float: "right", color: "red" }}
        onClick={onClick}
      >
        Remove
      </button>
    </React.Fragment>
  );
};

const renderAddList = props => {
  var fields = props.fields;
  function addItem() {
    fields.push({});
  }

  return (
    <React.Fragment>
      {" "}
      <div>{fields.map(renderAdd)}</div>
      <button
        type="button"
        style={{ backgroundColor: "#030b35" }}
        class="btn btn-brand btn-elevate btn-pill"
        onClick={addItem}
      >
        <i class="flaticon-bell" /> Add Option
      </button>
    </React.Fragment>
  );
};
const renderForm = props => {
  return (
    <form class="k-form ">
      <div className="row">
        <div class="col-lg-6">
          {/* <!--begin::Portlet--> */}
          <div class="k-portlet">
            <div class="k-portlet__head">
              <div class="k-portlet__head-label">
                <h3 class="k-portlet__head-title">Create Question</h3>
              </div>
            </div>

            {/* <!--begin::Form--> */}

            <div class="k-portlet__body">
              <div class="form-group row">
                <div class="col-lg-6 form-group-sub">
                  <div class="form-group row">
                    <div class="col-lg-12 form-group-sub">
                      <Field
                        component={renderFormField}
                        type="select"
                        label="Select Question Type: *"
                        name="questionType"
                        options={props.questionOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-lg-12">
                  <div class="form-group row">
                    <Field
                      component={renderFormField}
                      placeholder="Type your question"
                      rows="8"
                      type="textarea"
                      label="
                 Question: *"
                      name="question"
                      info="Please make sure the question typw matches the question"
                    />
                  </div>
                </div>
              </div>

              {/* {dynamic.map((val, id) => (
                        <div key={id} class="form-group row">
                          <div class="col-lg-4 form-group-sub">
                            {console.log(val, id)}
                            <SelectListGroup
                              name="options"
                              value={options}
                              options={answerOption}
                              onChange={e => this.onChange(e, id, "options")}
                              label="Select Option: *"
                            />
                          </div>
                          <div class="col-lg-4 form-group-sub">
                            <label class="form-control-label">Answer: *</label>
                            <input
                              type="text"
                              name="answers"
                              onChange={e => this.onChange(e, id, "answers")}
                              class="form-control"
                              placeholder="Enter an answer"
                              value={answers}
                            />
                          </div>
                          <div class="k-radio-inline col-lg-4 form-group-sub">
                            <div style={{ marginTop: "25px" }} />
                            <label class=" form-control-label k-radio">
                              <input
                                type="radio"
                                name="isCorect"
                                class="k-radio"
                                onChange={e => this.onChange(e, id, "isCorect")}
                                value={isCorect}
                                style={{ paddingTop: "10px" }}
                              />
                              Correct ?:
                              <span />
                            </label>
                          </div>
                        </div>
                      ))} */}
              {/* <button
                type="button"
                style={{ backgroundColor: "#030b35" }}
                class="btn btn-brand btn-elevate btn-pill"
                // onClick={this.addOption}
              >
                <i class="flaticon-bell" /> Add Option
              </button> */}
              <FieldArray component={renderAddList} />
              <br />
              <br />
              <div class="form-group row">
                <div class="col-lg-12">
                  <Field
                    component={renderFormField}
                    type="text"
                    name="mark"
                    label="Mark: *"
                    placeholder="Enter mark"
                  />
                </div>
              </div>
            </div>

            {/* <!--end::Form--> */}
          </div>
        </div>
        <div class="col-lg-6">
          {/* <!--begin::Portlet--> */}
          <div class="k-portlet">
            <div class="k-portlet__head">
              <div class="k-portlet__head-label">
                <h3 class="k-portlet__head-title">Question Image</h3>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-12">
                <div class="k-portlet__body">
                  <label class=" form-control-label">
                    Select Question Image
                  </label>
                  <input
                    // onChange={this.addImage}
                    fluid="true"
                    label="File types: jpg, png"
                    name="file"
                    type="file"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" />
        <div className="col-lg-6">
          <div class="k-portlet__foot">
            <div class="k-form__actions">
              <button
                style={{ float: "right" }}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
              {/* <button
                        style={{ float: "left" }}
                        type="submit"
                        class="btn btn-primary"
                      >
                        Submit
                      </button> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const DecoratedForm = reduxForm({
  form: "dynamic-redux-form",
  initialValues: {
    items: [{}]
  }
})(renderForm);

export default connect()(CreateQuestion);
