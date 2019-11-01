import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import 'tachyons';
import { customers } from './customers';
import { products } from './products';
import Scroll from './components/Scroll/Scroll';
import CardList from './components/CardList/CardList';
import Customers from './components/Customers/Customers';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import CreateProduct from './components/CreateProduct/CreateProduct';
import CreateCustomer from './components/CreateCustomer/CreateCustomer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'signin',
      username: '',
      selectedCustomer: {},
      isSignedIn: false,
      products: [],
      customers: []
    }
  }
  onSignIn = (username) => {
    this.setState({username:username});
  }
  componentDidMount() {
    this.setState({products: products})
    this.setState({customers: customers})
  }

  onDeleteProduct = (product) => {
    const newProducts = this.state.products;
    newProducts.splice(newProducts.indexOf(product),1);
    this.setState({products: newProducts});
  }

  onCreateProduct = (product) => {
    const newProducts = this.state.products;
    newProducts.push(product);
    this.setState({products: newProducts});
  }

  onCreateCustomer = (customer) => {
    const newCustomers = this.state.customers;
    newCustomers.push(customer);
    this.setState({customers: newCustomers});
  }

  onSelectCustomer = (customer) => {
    this.setState({selectedCustomer: customer});
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }
  
  render() {
    return (
        <div className="App">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} user={this.state.username}/>
          { this.state.route === 'signin' || this.state.route === 'signout' 
          ? <Signin onRouteChange={this.onRouteChange} onSignIn={this.onSignIn}/>
          : this.state.route === 'home'
          ?<div>
            <Scroll>
            <CardList products={this.state.products} onDeleteProduct={this.onDeleteProduct}/>
            </Scroll> 
          </div>
          : this.state.route === 'customers'
          ?<div>
            <Scroll>
            <Customers  customers={this.state.customers} onRouteChange={this.onRouteChange} onSelectCustomer={this.onSelectCustomer}/>
            </Scroll>
          </div>
          : this.state.route === 'customerDetails'
          ?<div>
            <Scroll>
            <CustomerDetail selectedCustomer={this.state.selectedCustomer}/>
            </Scroll>
          </div>
          : this.state.route === 'createProduct'
          ?<CreateProduct onCreateProduct={this.onCreateProduct} onRouteChange={this.onRouteChange}/>
          : this.state.route === 'createCustomer'
          ?<CreateCustomer onCreateCustomer={this.onCreateCustomer} onRouteChange={this.onRouteChange}/>
          :<div></div>
          }
        </div>  
      )
  } 
}

export default App;
 