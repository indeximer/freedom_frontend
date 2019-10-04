import React,{Component} from 'react'
import uuidV1 from 'uuid/v1'
import { HashRouter } from 'react-router-dom'

/* Components */
import Routes from './Routes'

// Helpers
import { asciiToHexa, randomString } from './../../utils/helpers'

class App extends Component{

  componentWillMount(){
    sessionStorage.setItem('session-id', asciiToHexa(randomString()))
  }

  render(){
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    )
  }
}

export default App