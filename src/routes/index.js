import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { LoginPage } from '@/pages/Login'
import { PasswordRecoveryPage } from '@/pages/PasswordRecovery'
import { RegisterPage } from '@/pages/Register'
import { SkillsPage } from '@/pages/Skills'

export default function AppRouter() {
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
        <Route exact path="/skills" component={SkillsPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
