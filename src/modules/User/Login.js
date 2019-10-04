import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Card, 
  Typography, 
  CardActions, 
  CardActionButtons, 
  CardActionButton 
} from 'rmwc'

// components
import LoginForm from './LoginForm'

//assets
import logo from '../../assets/img/logo.png'

export default props => {
  return (
      <div className="user">
        <div className="form-wrapper">
          <img className="logo" src={logo} alt="Freedom RPG App" />
          <Card>
            <div className="card-body">
              <Typography use="headline6" tag="h1">
                Login:
              </Typography>
              <LoginForm/>
            </div>
            <CardActions>
              <CardActionButtons>
                <Link to="/register"><CardActionButton>Não tem Cadastro? Registre-se aqui!</CardActionButton></Link>
              </CardActionButtons>
            </CardActions>
          </Card>
        </div>
      </div>    
  )
} 