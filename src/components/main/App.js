import React,{Component} from 'react'
import { HashRouter } from 'react-router-dom'

/* Components */
import Routes from './Routes'

class App extends Component{
  render(){
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    )
  }
}

export default App