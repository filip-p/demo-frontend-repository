import React from 'react';
import FormErrors from '../FormErrors/FormErrors';

class CreateCustomer extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			formErrors: {name: '',email: ''},
		    emailValid: false,
		    nameValid: false,
		    formValid: false
		}
	}	

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onSubmitCreate = () => {
		if(this.state.formValid){
			const customer = {
			id: '',
			name: this.state.name,
			purchasedProducts: [],
			email: this.state.email
		}
		this.props.onCreateCustomer(customer);
		this.props.onRouteChange('customers');
		} else{
			
		this.validateField('name', this.state.name);
		this.validateField('email', this.state.email);
		} 
	}

	handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value});
	  this.validateField(name, value);
	}

	validateField(fieldName, value) {
	  let fieldValidationErrors = this.state.formErrors;
	  let emailValid = this.state.emailValid;
	  let nameValid = this.state.nameValid;

	  switch(fieldName) {
	    case 'email':
	      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	      fieldValidationErrors.email = emailValid ? '' : ' is invalid! ex: greg@live.com';
	      break;
	    case 'name':
	      nameValid = value.length > 0;
	      fieldValidationErrors.name = nameValid ? '': ' must not be empty! ';
	      break;
	    default:
	      break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
	                  emailValid: emailValid,
	                  nameValid: nameValid
	                }, this.validateForm);
	}

	validateForm() {
	  this.setState({formValid: this.state.emailValid && this.state.nameValid});
	}

	render(){
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

				<main className="pa4 black-80">
					<form className="measure">
						<fieldset id="create_product" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Create New Customer</legend>
							<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="name" >Name</label>
							<input 
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							onChange={(event) => this.handleUserInput(event)}
							type="text" 
							name="name" 
							value={this.state.name} 
							id="name" />
							</div>
							<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="email">E-mail</label>
							<input 
							className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							onChange={(event) => this.handleUserInput(event)}				        
							type="email" 
							name="email"
							value={this.state.email}  
							id="email" />
							</div>
						</fieldset>
						<div >
							<div className="br3 ba b--black-10 mv4 mw6 shadow-5 center">
							<FormErrors formErrors={this.state.formErrors} />
							</div>
						<input 
						onClick={this.onSubmitCreate}
						className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" type="button" value="Create" />
						</div>
					</form>
				</main>
			</article>
			);
	}

}

export default CreateCustomer;