import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './partials/PrivateRoute'
import { useAuthenticationContext } from '@/contexts/Authentication'

import { LoginPage } from '@/pages/Login'
import { PasswordRecoveryPage } from '@/pages/PasswordRecovery'
import { RegisterPage } from '@/pages/Register'
import { SkillsPage } from '@/pages/Skills'

export default function AppRouter() {
  const { isAuthenticated } = useAuthenticationContext()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route
          exact
          path="/password-recovery"
          component={PasswordRecoveryPage}
        />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute
          exact
          path="/skills"
          component={SkillsPage}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
