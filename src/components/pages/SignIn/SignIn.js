import React from "react";
import { Link } from "react-router-dom";
import validator from "validator"
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';


import "./SignIn.css";

class SignIn extends React.Component {
	state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  }

  onChange = e => {
    this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value}
		})
		
  }

  validate = data => {
		const errors = {};
		if(!data.email) errors.email = "Can't be blank";
		else if(!validator.isEmail(data.email)) errors.email = "Invalid Email";
    if(!data.password) errors.password = "Can't be blank  "
    return errors
  }
	
  onSubmit = (e) => {
		const { login, history} = this.props;

		const user = {
			user: {
				name: "Ogbonna Arinze",
				email: "arinze.ogbonna.198717@unn.edu.ng",
				role: "Coordinator",
				isAuthenticated: true
			},
	
			candidate: {
				name: "Ifeanyi Agu",
				isAuthenticated: false
			}
		};
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({errors});
		if(Object.keys(errors).length === 0){
			this.setState({loading: true})
			login(user)
			history.push("/dashboard");
		}
		
  }
  render() {
    const { data, errors, loading } = this.state;
    return (
      <React.Fragment>
        <div className="k-grid k-grid--ver k-grid--root k-page">
			<div className="k-grid__item   k-grid__item--fluid k-grid  k-grid k-grid--hor k-login-v2" id="k_login_v2">

				{/* <!--begin::Item--> */}
				<div className="k-grid__item  k-grid--hor">

					{/* <!--begin::Heade--> */}
					<div className="k-login-v2__head">
						<div className="k-login-v2__head-logo">
							<Link to="#">
								<img src="../assets/media/logos/logo-5.png" alt="" />
							</Link>
						</div>
					</div>

					{/* <!--begin::Head--> */}
				</div>

				{/* <!--end::Item--> */}

				{/* <!--begin::Item--> */}
				<div className="k-grid__item  k-grid  k-grid--ver  k-grid__item--fluid ">

					{/* <!--begin::Body--> */}
					<div className="k-login-v2__body">

						{/* <!--begin::Wrapper--> */}
						<div className="k-login-v2__body-wrapper">
							<div className="k-login-v2__body-container">
								<div className="k-login-v2__body-title">
									<h3>Sign to Account</h3>
								</div>

								{/* <!--begin::Form--> */}
								<form className="k-login-v2__body-form k-form k-login-v2__body-form--border" onSubmit={this.onSubmit} autoComplete="off">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="example@example.com" name="email" autoComplete="off"
										value={data.email}
										onChange={this.onChange} />
										{errors.email && <span style={{color: "red"}}>{errors.email}</span>}
									</div>
									<div className="form-group">
										<input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off"
										value={data.password}
										onChange={this.onChange} />
										{errors.password && <span style={{color: "red"}}>{errors.password}</span>}
									</div>
									
								<div className="k-login-v2__body-action k-login-v2__body-action--brand" style={{marginTop: "3rem", padding: "0"}}>
									<Link to="/forgotpassword" className="k-link k-link--brand">
										Forgot Password ?
									</Link>
								
										<button 
											disabled={loading}
											className="btn btn-pill btn-brand btn-elevate"
											>
											Sign In
										</button>
								</div>
								</form>

								{/* <!--end::Form--> */}

								{/* <!--begin::Action--> */}

								{/* <!--end::Action--> */}

								
							</div>
						</div>

						{/* <!--end::Wrapper--> */}

						{/* <!--begin::Pic--> */}
						<div className="k-login-v2__body-pic">
							<img src="../assets/media/misc/bg_icon.svg" alt="" />
						</div>

						{/* <!--begin::Pic--> */}
					</div>

					{/* <!--begin::Body--> */}
				</div>

				{/* <!--end::Item--> */}

				{/* <!--begin::Item--> */}
				<div className="k-grid__item">
					<div className="k-login-v2__footer">
						<div className="k-login-v2__footer-link">
							<Link to="#" className="k-link k-font-brand">Privacy</Link>
							<Link to="#" className="k-link k-font-brand">Legal</Link>
							<Link to="#" className="k-link k-font-brand">Contact</Link>
						</div>
						<div className="k-login-v2__footer-info">
							<Link to="#" className="k-link">&copy; {new Date().getFullYear()}{" "} SureEdu</Link>
						</div>
					</div>
				</div>

				{/* <!--end::Item--> */}
			</div>
		</div>
      </React.Fragment>
    );
  }
}

export default connect(null, { login })(SignIn);
