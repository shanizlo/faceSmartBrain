import React, { Component } from 'react';

const Register = ({ onRouteChange }) => {
	return (
		<article className="br5 ba light-gray b--white-50 mv4 w-100 w-50-m w-25-1 mw5 shadow-5 center">
			<main className="pa4 white-80">
				<form className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f3 fw6 ph0 mh0">Register</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" for="email-address">Email</label>
							<input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type="email" name="email-address"  id="email-address"/>
						</div>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" for="name">Name</label>
							<input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type="text" name="name"  id="name"/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" for="password">Password</label>
							<input className="b pa2 input-reset ba bg-grey hover-bg-white w-100" type="password" name="password"  id="password"/>
						</div>
					</fieldset>
					<div className="">
						<input 
							onClick={() => onRouteChange('home')}
							className="b ph3 pv2 input-reset ba b--white bg-grey grow pointer f6 dib" 
							type="submit" 
							value="Sign in"
						/>
					</div>
				</form>
			</main>
		</article>
	);
}

export default Register;