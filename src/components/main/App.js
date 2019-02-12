import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../../modules/User/Login'
import Register from '../../modules/User/Register'
import ListTechniques from '../../modules/Techniques/ListTechniques'
import AddTechnique from '../../modules/Techniques/AddTechnique'
import EditTechnique from '../../modules/Techniques/EditTechnique'

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
            <AddTechnique />
        )}/>

        <Route exact path="/techniques/edit" render={() =>(
            <EditTechnique />
        )}/>
      </div>      
    )
  }
}

export default App;