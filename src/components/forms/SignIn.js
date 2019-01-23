import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "react-form";

const validate = data => {
  const errors = {};
  if (!data.email) errors.email = "Can't be blank";
  else if (!validator.isEmail(data.email)) errors.email = "Invalid Email";
  if (!data.password) errors.password = "Can't be blank  ";
  return errors;
};

const renderInput = { input, meta };
let SignInForm = ({ handleSubmit, onSubmit, submitting }) => (
  <form
    className="k-login-v2__body-form k-form k-login-v2__body-form--border"
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="off"
  >
    <div className="form-group">
      <Field
        className="form-control"
        type="text"
        component="input"
        placeholder="example@example.com"
        name="email"
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
    </div>
    <div className="form-group">
      <Field
        className="form-control"
        type="password"
        placeholder="Password"
        component="input"
        name="password"
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password}</span>
      )}
    </div>

    <div
      className="k-login-v2__body-action k-login-v2__body-action--brand"
      style={{ marginTop: "3rem", padding: "0" }}
    >
      <Link to="/signup" className="k-link k-link--brand">
        Forgot Password ?
      </Link>
      <button
        disabled={submitting}
        className="btn btn-pill btn-brand btn-elevate"
      >
        Sign In
      </button>
    </div>
  </form>
);

SignInForm = reduxForm({
  form: "signin",
  destroyOnUnmount: false,
  validate
})(SignInForm);

export default SignInForm;
