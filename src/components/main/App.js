import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../User/Login'
import Register from '../User/Register'
import ListTechniques from '../Techniques/Index'
import AddTechniques from '../Techniques/Add'

class App extends Component {

  render() {

    return (
      <div>
        <Route exact path="/" render={() =>(
          <Login/>
        )}/>

        <Route path="/register" render={() =>(
          <Register/>
        )}/>

        <Route exact path="/techniques" render={() =>(
            <ListTechniques />
        )}/>

        <Route exact path="/techniques/add" render={() =>(
            <AddTechniques />
        )}/>
      </div>      
    )
  }
}

export default App;