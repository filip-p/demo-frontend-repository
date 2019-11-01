import React from 'react';
import Modal from 'react-modal';
import FormErrors from '../FormErrors/FormErrors';

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

Modal.setAppElement('#root');

class CreateProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: false,
			name: '',
			price: '',
			formErrors: {name: '', price: ''},
		    proceValid: false,
		    nameValid: false,
		    formValid: false
		}
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}	

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onPriceChange = (event) => {
		this.setState({price: event.target.value})
	}

	handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value});
	  this.validateField(name, value);
	}

	validateField(fieldName, value) {
	  let fieldValidationErrors = this.state.formErrors;
	  let priceValid = this.state.priceValid;
	  let nameValid = this.state.nameValid;

	  switch(fieldName) {
	    case 'price':
	      priceValid = value.match(/^[0-9]{1,2}([.][0-9]{1,2})?$/);
	      fieldValidationErrors.price = priceValid ? '' : ' is invalid! must inclide: (number, positive, max 2 digits)';
	      break;
	    case 'name':
	      nameValid = value.length > 0;
	      fieldValidationErrors.name = nameValid ? '': ' must not be empty! ';
	      break;
	    default:
	      break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
	                  priceValid: priceValid,
	                  nameValid: nameValid
	                }, this.validateForm);
	}

	validateForm() {
	  this.setState({formValid: this.state.priceValid && this.state.nameValid});
	}
	onSubmitCreate = () => {
		if(this.state.formValid){
			this.openModal();
			const product = {
				id: '',
				name: this.state.name,
				price: this.state.price
			}
			this.props.onCreateProduct(product);
		}else{		
		this.validateField('name', this.state.name);
		this.validateField('price', this.state.price);
		}
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
	    // references are now sync'd and can be accessed.
	   // this.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.props.onRouteChange('home');
		this.setState({modalIsOpen: false});
	}
	onCreateMoreProducts = () =>{
		this.props.onRouteChange('createProduct');
		this.setState({modalIsOpen: false});
	}

	render(){
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<form className="measure">
						<fieldset id="create_product" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Create New Product</legend>
							<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="name" >Product Name</label>
							<input 
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							onChange={(event) => this.handleUserInput(event)}
							type="text" 
							name="name"
							value={this.state.name}   
							id="name" />
							</div>
							<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="price">Product Price</label>
							<input 
							className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							onChange={(event) => this.handleUserInput(event)}				        
							type="text" 
							name="price" 
							value={this.state.price}  
							id="price" />
							</div>
						</fieldset>
						<div className="">
						<div className="br3 ba b--black-10 mv4 mw6 shadow-5 center">
							<FormErrors formErrors={this.state.formErrors} />
							</div>
						<input 
						onClick={this.onSubmitCreate}
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Create" />
						</div>
						<Modal
				          isOpen={this.state.modalIsOpen}
				          onAfterOpen={this.afterOpenModal}
				          onRequestClose={this.closeModal}
				          style={customStyles}
				          contentLabel="Example Modal">
				          <h2 >Do you want to create more products?</h2>
				          <button onClick={this.closeModal}>No</button>
				          <button onClick={this.onCreateMoreProducts}>Yes</button>
				        </Modal>
					</form>
				</main>
			</article>
			);
	}

}

export default CreateProduct;