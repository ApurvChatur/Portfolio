import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { handleInput } from '../../../../dFunction/handleInput'
import handleSubmit from '../../../../dFunction/handleSubmit'
import regex from '../../../../dFunction/regex'
import submitFormObject from '../../../../dFunction/submitFormObject'
import FinalRouteName from '../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs'
import { Action } from './extra/State'

const Register = () => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.RegisterState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RegisterAPICall: () => APIs.RegisterAPI(Redux, navigate)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// firstName
		if (!FormValue.firstName) {
			errors.firstName = "Please enter first name"
		} else if (!regex.name.test(FormValue.firstName)) {
			errors.email = "Please enter valid first name"
		}
		// lastName
		if (!FormValue.lastName) {
			errors.lastName = "Please enter last name"
		} else if (!regex.name.test(FormValue.lastName)) {
			errors.email = "Please enter valid last name"
		}
		// email
		if (!FormValue.email) {
			errors.email = "Please enter email"
		} else if (!regex.email.test(FormValue.email)) {
			errors.email = "Please enter valid email"
		}
		// password
		if (!FormValue.password) {
			errors.password = "Please enter password"
		} else if (!regex.password.test(FormValue.password)) {
			errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// password
		if (!FormValue.confirmPassword) {
			errors.confirmPassword = "Please enter confirm password"
		} else if (!regex.password.test(FormValue.password)) {
			errors.confirmPassword = "Confirm password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} else if (FormValue.password !== FormValue.confirmPassword) {
			errors.confirmPassword = "Please match the password"
		}

		return errors;
	}			

	// All Renders
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.RegisterAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
	return (
			<div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
					<div class="d-flex align-items-center justify-content-between mb-3">
							<Link to={FinalRouteName.Content.Sidebar.Home.Dashboard.DashboardRoute} class="">
									<h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Admin</h3>
							</Link>
							<h3>Sign Up</h3>
					</div>
					<div class="form-floating mb-3">
							<input 
									type="text" 
									class="form-control" 
									id="floatingText1" 
									placeholder="jhondoe" 
									name='firstName'
									onChange={event => handleInput(event, Redux)}
							/>
							<label for="floatingText">First Name</label>
							<div className="form-text text-danger">{Redux.state.FormObject.FormError.firstName}</div>
					</div>
					<div class="form-floating mb-3">
							<input 
									type="text" 
									class="form-control" 
									id="floatingText2" 
									placeholder="jhondoe" 
									name='lastName'
									onChange={event => handleInput(event, Redux)}
							/>
							<label for="floatingText">Last Name</label>
							<div className="form-text text-danger">{Redux.state.FormObject.FormError.lastName}</div>
					</div>
					<div class="form-floating mb-3">
							<input 
									type="email" 
									class="form-control" 
									id="floatingInput" 
									placeholder="name@example.com" 
									name='email'
									onChange={event => handleInput(event, Redux)}
							/>
							<label for="floatingInput">Email address</label>
							<div className="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
					</div>
					<div class="form-floating mb-4">
							<input 
									type="password" 
									class="form-control" 
									id="floatingPassword1" 
									placeholder="Password"
									name='password'
									onChange={event => handleInput(event, Redux)}
							/>
							<label for="floatingPassword">Password</label>
							<div className="form-text text-danger">{Redux.state.FormObject.FormError.password}</div>
					</div>
					<div class="form-floating mb-4">
							<input 
									type="password" 
									class="form-control" 
									id="floatingPassword2" 
									placeholder="Password" 
									name='confirmPassword'
									onChange={event => handleInput(event, Redux)}
							/>
							<label for="floatingPassword">Confirm Password</label> 
							<div className="form-text text-danger">{Redux.state.FormObject.FormError.confirmPassword}</div>
					</div>

					{/* Forgot Password */}
					<div class="d-flex align-items-center justify-content-between mb-4">
							{/* <div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1" />
									<label class="form-check-label" for="exampleCheck1">Check me out</label>
							</div> */}
							<Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}>Forgot Password</Link>
					</div>

					{/* Buttons */}
					<button type="submit" class="btn btn-primary py-3 w-100 mb-4" onClick={event => handleSubmit(event, Redux, validateFormValues)}>Sign Up</button>
					<p class="text-center mb-0">Already have an Account? <Link to={FinalRouteName.Auth.LoginRegister.LoginRoute}>Sign In</Link></p>
			</div>
	)
}

export default Register