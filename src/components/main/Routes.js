import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

//Api
import { validateApiToken } from '../../api/apiConstants'

/* Components */
import ErrorBoundary from './ErrorBoundary'
import Login from '../../modules/User/Login'
import Techniques from '../../modules/Techniques'

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