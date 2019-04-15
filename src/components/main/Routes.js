import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

/* Components */
import ErrorBoundary from './ErrorBoundary'
import Login from '../../modules/User/Login'
import Register from '../../modules/User/Register'
import ListTechniques from '../../modules/Techniques/ListTechniques'
import AddTechnique from '../../modules/Techniques/AddTechnique'
import EditTechnique from '../../modules/Techniques/EditTechnique'

const routeList = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: false
  },
  {
    path: '/techniques',
    component: ListTechniques,
    exact: false
  },
  {
    path: '/techniques/add',
    component: AddTechnique,
    exact: false
  },
  {
    path: '/techniques/edit/:id',
    component: EditTechnique,
    exact: false
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

const Routes = props => {
  return (
    <Switch>
      {routeList.map((route, key) => {
          return <RouteBuilder key={key} {...route} />
        }  
      )}
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default withRouter(Routes)