import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
		this.validator = new SimpleReactValidator();
	}

	onEmailChange  = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange  = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignin = () => {
		if (!this.validator.allValid()) {
			this.validator.showMessages()
			this.forceUpdate()
			return
		}
		fetch('https://arcane-scrubland-98726.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render() {
		const { onRouteChange } = this.props; 
		return (
			<article className="br5 ba light-gray b--white-50 mv4 w-100 w-50-m w-25-1 mw5 shadow-5 center">
				<main className="pa4 white-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f3 fw6 ph0 mh0">Sign In</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input 
									className="pa2 input-reset ba bg-grey hover-bg-white w-100" 
									type="email" name="email-address"  
									id="email-address"
									onChange={this.onEmailChange}
								/>
								{this.validator.message('email', this.state.signInEmail, 'required')}
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								<input 
									className="b pa2 input-reset ba bg-grey hover-bg-white w-100" 
									type="password" 
									name="password"
									id="password"
									onChange={this.onPasswordChange}
								/>
								{this.validator.message('password', this.state.signInPassword, 'required')}
							</div>
						</fieldset>
						<div className="">
							<input 
								onClick={this.onSubmitSignin}
								className="b ph3 pv2 input-reset ba b--white bg-grey grow pointer f6 dib" 
								type="submit" 
								value="Sign in"
							/>
						</div>
						<div className="lh-copy mt3">
							<p onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Signin;