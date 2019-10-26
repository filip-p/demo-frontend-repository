import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import 'tachyons';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',

    }
  }


  onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {
    return (
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}/>
          { this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          :<div>

          </div>
          }
        </div>  
      )
  } 
}

export default App;
