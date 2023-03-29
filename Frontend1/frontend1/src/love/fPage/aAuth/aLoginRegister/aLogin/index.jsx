import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import FinalRouteName from '../../../../gRoute/FinalRouteName'
import { handleInput } from '../../../../dFunction/handleInput'
import submitFormObject from '../../../../dFunction/submitFormObject';
import handleSubmit from '../../../../dFunction/handleSubmit';
import regex from '../../../../dFunction/regex';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Login = () => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.LoginState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		LoginAPICall: () => APIs.LoginAPI(Redux, navigate)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// email
		if (!FormValue.email) {
			errors.email = "Please enter email"
		} else if (!regex.email.test(FormValue.email)) {
			errors.email = "Please enter valid email"
		}
		// password
		if (!FormValue.password) {
				errors.password = "Please enter password"
		} else if (FormValue.password.length < 8 || FormValue.password.length > 16) {
		    errors.password = "Password length should be 8 to 16 characters"
		} else if (!regex.password.test(FormValue.password)) {
		    errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 

		return errors;
	}	

	// All Renders
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.LoginAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
  // useEffect(() => {
  //   console.log(Redux.state)
  // }, [Redux.state])
  
	// JSX
	return (
		<div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
			<div className="d-flex align-items-center justify-content-between mb-3">
				<Link to={FinalRouteName.Content.Sidebar.Home.Dashboard.DashboardRoute} className="">
					<h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>Admin</h3>
				</Link>
				<h3>Sign In</h3>
			</div>

			{/* Email */}
			<div className="form-floating mb-3">
				<input 
					type="email" 
					className="form-control" 
					id="floatingInput" 
					placeholder="name@example.com" 
					name='email'
					onChange={event => handleInput(event, Redux)}
				/>
				<label htmlFor="floatingInput">Email address</label>
				<div className="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
			</div>

			{/* Password */}
			<div className="form-floating mb-4">
				<input 
					type="password" 
					className="form-control" 
					id="floatingPassword" 
					placeholder="Password" 
					name='password'
					onChange={event => handleInput(event, Redux)}
				/>
				<label htmlFor="floatingPassword">Password</label>
				<div className="form-text text-danger">{Redux.state.FormObject.FormError.password}</div>
			</div>

			{/* Forgot Password */}
			<div className="d-flex align-items-center justify-content-between mb-4">
				{/* <div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
				</div> */}
				<Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}>Forgot Password</Link>
			</div>

			{/* Buttons */}
			<button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={event => handleSubmit(event, Redux, validateFormValues)}>Sign In</button>
			<p className="text-center mb-0">Don't have an Account? <Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>Sign Up</Link></p>
		</div>  
	)
}

export default Login