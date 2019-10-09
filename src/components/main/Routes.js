import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

//helpers

import {getEnv} from '../../utils/helpers'

//Api
import { validateApiToken } from '../../api/apiConstants'

/* Components */
import ErrorBoundary from './ErrorBoundary'
import Login from '../../modules/User/Login'
import Techniques from '../../modules/Techniques'
import Offerings from '../../modules/Offerings'
import AddOffering from '../../modules/Offerings/AddOffering'
import EditOffering from '../../modules/Offerings/EditOffering'

const routeList = [
  {
    path: '/',
    component: Login,
    exact: true,
    private: false
  },
  {
    path: '/techniques',
    component: Techniques,
    exact: false,
    private:false
  },
  {
    path: '/offerings',
    component: Offerings,
    exact: true,
    private: false,
    roles: ["OD_PRD_OFFERING_CONSULTA", "OD_PRD_OFFERING_ADM"]
  },
  {
    path: '/offerings/add',
    component: AddOffering,
    exact: false,
    private:false,
    roles: ["OD_PRD_OFFERING_ADM"]
  },
  {
    path: '/offerings/edit/:id',
    component: EditOffering,
    exact: false,
    private:false,
    roles: ["OD_PRD_OFFERING_ADM"]
  }
]

const RouteBuilder = route => {
  return (
    <ErrorBoundary>
      <Route
            exact={!!route.exact}
            path={route.path}
            render={props => (<route.component {...props} />)} />
    </ErrorBoundary>
    
  )
}

const verifyRoles = (neededRoles, userRoles) => {
    let foundRoles = neededRoles.some(roles => userRoles.indexOf(roles) >= 0)
    return foundRoles
}

const  PrivateRoute = ({component: Component, ...rest}) => {
  const apiToken = sessionStorage.getItem('api-token')
  const neededRoles = rest.roles
  const userRoles = sessionStorage.getItem('user-roles').split(',')
  const env = getEnv()
  let hasRoles = false

  if(Array.isArray(neededRoles)){
    hasRoles = verifyRoles(neededRoles, userRoles)
  }else{
    hasRoles = true
  }

  if(validateApiToken() && hasRoles){
    return (
      <Route
        {...rest}
        render={(props) => apiToken !== false
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }else{
    return <Redirect to="/"/>
  }
}

const Routes = props => {
  return (
    <Switch>
      {routeList.map((route, key) => {
          if(!route.private){
            return <RouteBuilder key={key} {...route} />
          }else{
            return <PrivateRoute key={key} {...route} component={route.component} />
          }
        }  
      )}
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default withRouter(Routes)