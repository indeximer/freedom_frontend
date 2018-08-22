import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Menu from './components/Menu';
import ListTechniques from './components/Techniques/Index';
import AddTechniques from './components/Techniques/Add';
import * as TechniquesAPI from './utils/TechniquesAPI';

class App extends Component {

  state = {    
    techniques : []
  };

  componentDidMount(){
    TechniquesAPI.getAll().then((techniques) => this.setState({techniques}));
  }

  render() {

    const {techniques} = this.state;

    return (
      <div>
        <Route exact path="/" render={() =>(
          <Login/>
        )}/>

        <Route path="/register" render={() =>(
          <Register/>
        )}/>

        <Route exact path="/techniques" render={() =>(
          <div>
            <Menu active="techniques"/>
            <ListTechniques techniques={techniques} />
          </div>
        )}/>

        <Route exact path="/techniques/add" render={() =>(
          <div>
            <Menu active="techniques-add"/>
            <AddTechniques techniques={techniques} />
          </div>
        )}/>
      </div>      
    )
  }
}

export default App;