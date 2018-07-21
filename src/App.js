import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Menu from './components/Menu';
import ListTechniques from './components/Techniques/Index';
import AddTechniques from './components/Techniques/Add';

class App extends Component {

  state = {    
    techniques : [
      {
        "id": "1",
        "name": "Bola de Fogo",
        "difficulty": 18,
        "effect": 9,
        "form": 6,
        "area": 3,
        "duration": 0,
        "execution": 0,
        "restriction": 0,
        "description": 'Uma bola de fogo.',
        "category" : "Magia",
        "created_at": '01/12/2018',
        "user_id": 1,
      },
      {
        "id": "2",
        "name": "Cone Glacial",
        "difficulty": 18,
        "effect": 9,
        "form": 6,
        "area": 3,
        "duration": 0,
        "execution": 0,
        "restriction": 0,
        "description": 'Um cone de gelo.',
        "category" : "Magia",
        "created_at": '01/12/2018',
        "user_id": 1,
      },
      {
        "id": "3",
        "name": "Lampejo",
        "difficulty": 9,
        "effect": 6,
        "form": 3,
        "area": 0,
        "duration": 0,
        "execution": 0,
        "restriction": 0,
        "description": 'Um raio de energia.',
        "category" : "Magia",
        "created_at": '01/12/2018',
        "user_id": 1,
      },
      {
        "id": "4",
        "name": "Ilha de Lâminas",
        "difficulty": 15,
        "effect": 6,
        "form": 6,
        "area": 3,
        "duration": 0,
        "execution": 0,
        "restriction": 0,
        "description": 'Uma manobra de combate defensiva.',
        "category" : "Manobra de combate",
        "created_at": '01/12/2018',
        "user_id": 1,
      },
      {
        "id": "5",
        "name": "Martelo da Montanha",
        "difficulty": 12,
        "effect": 9,
        "form": 0,
        "area": 0,
        "duration": 0,
        "execution": 3,
        "restriction": 0,
        "description": 'Martela o martelão.',
        "category" : "Manobra de combate",
        "created_at": '01/12/2018',
        "user_id": 1,
      },
      {
        "id": "6",
        "name": "Toque chocante",
        "difficulty": 18,
        "effect": 9,
        "form": 6,
        "area": 3,
        "duration": 0,
        "execution": 0,
        "restriction": 0,
        "description": 'Choque Tocante.',
        "category" : "Magia",
        "created_at": '01/12/2018',
        "user_id": 1,
      }
    ]
  };

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