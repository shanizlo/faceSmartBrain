import React, { Component } from 'react';

const Signin = ({ onRouteChange }) => {
	return (
		<article className="br5 ba light-gray b--white-50 mv4 w-100 w-50-m w-25-1 mw5 shadow-5 center">
			<main className="pa4 white-80">
				<form className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f3 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" for="email-address">Email</label>
							<input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type="email" name="email-address"  id="email-address"/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" for="password">Password</label>
							<input className="b pa2 input-reset ba bg-grey hover-bg-white w-100" type="password" name="password"  id="password"/>
						</div>
					</fieldset>
					<div className="">
						<input 
							onClick={onRouteChange}
							className="b ph3 pv2 input-reset ba b--white bg-grey grow pointer f6 dib" 
							type="submit" 
							value="Sign in"
						/>
					</div>
					<div className="lh-copy mt3">
						<a href="#0" className="f6 link dim white db">Register</a>
					</div>
				</form>
			</main>
		</article>
	);
}

export default Signin;