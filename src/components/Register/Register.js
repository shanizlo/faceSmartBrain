import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
		this.validator = new SimpleReactValidator();
	}

	onNameChange  = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange  = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange  = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignin = () => {
		if (!this.validator.allValid()) {
			this.validator.showMessages()
			this.forceUpdate()
			return
		}
		fetch('https://arcane-scrubland-98726.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,	
        		password: this.state.password,	
        		name: this.state.name
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
		return (
			<article className="br5 ba light-gray b--white-50 mv4 w-100 w-50-m w-25-1 mw5 shadow-5 center">
				<main className="pa4 white-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f3 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input 
									className="pa2 input-reset ba bg-grey hover-bg-white w-100" 
									type="email" 
									name="email-address"  
									id="email-address"
									onChange={this.onEmailChange}
								/>
								{this.validator.message('email', this.state.email, 'required')}
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
								<input 
									className="pa2 input-reset ba bg-grey hover-bg-white w-100" 
									type="text" 
									name="name"  
									id="name"
									onChange={this.onNameChange}
								/>
								{this.validator.message('name', this.state.name, 'required')}
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
								{this.validator.message('password', this.state.password, 'required')}
							</div>
						</fieldset>
						<div className="">
							<input 
								onClick={this.onSubmitSignin}
								className="b ph3 pv2 input-reset ba b--white bg-grey grow pointer f6 dib" 
								type="submit" 
								value="Register"
							/>
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Register;