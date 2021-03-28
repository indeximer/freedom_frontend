import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './partials/PrivateRoute'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { ServiceProvider } from '@/contexts/Service'

import { HomePage } from '@/pages/Home'
import { LoginPage } from '@/pages/Login'
import { RegisterPage } from '@/pages/Register'
import { SkillsPage } from '@/pages/Skills'
import { TechniquesPage } from '@/pages/Techniques'
import { TechniqueCreatePage } from '@/pages/TechniqueCreate'

export default function AppRouter() {
  const { isAuthenticated } = useAuthenticationContext()

  return (
    <ServiceProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={HomePage}
            isAuthenticated={isAuthenticated}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute
            exact
            path="/skills"
            component={SkillsPage}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/techniques"
            component={TechniquesPage}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/techniques/create"
            component={TechniqueCreatePage}
            isAuthenticated={isAuthenticated}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ServiceProvider>
  )
}
