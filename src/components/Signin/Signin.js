 import React from 'react';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInUsername: '',
			signInPassword: '',
			error: ''
		}
	}
	onUsernameChange = (event) => {
		this.setState({signInUsername: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		//do a asynchronus fetch() here...
			this.props.onSignIn(this.state.signInUsername)
			this.props.onRouteChange('home')

	}

	render(){
		return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="username" required>Username</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        onChange={this.onUsernameChange}
			        type="text" 
			        name="username"  
			        id="username" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        onChange={this.onPasswordChange}
			        type="password" 
			        name="password"  
			        id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			    	<div>{this.state.error}</div>
			      <input 
			      onClick={this.onSubmitSignIn}
			      className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" />
			    </div>
			  </form>
			</main>
		</article>
		);
	}
}

export default Signin;