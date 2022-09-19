import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './partials/PrivateRoute'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { ServiceProvider } from '@/contexts/Service'
import { StoreProvider } from '@/contexts/Store'

import { HomePage } from '@/pages/Home'
import { LoginPage } from '@/pages/Login'
import { RegisterPage } from '@/pages/Register'
import { SkillsPage } from '@/pages/Skills'
import { TechniquesPage } from '@/pages/Techniques'
import { TechniqueCreatePage } from '@/pages/TechniqueCreate'
import { TechniqueEditPage } from '@/pages/TechniqueEdit'
import { CharactersPage } from '@/pages/Characters'
import { CharacterCreatePage } from '@/pages/CharacterCreate'

export default function AppRouter() {
  const { isAuthenticated } = useAuthenticationContext()

  return (
    <ServiceProvider>
      <StoreProvider>
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
              path="/characters"
              component={CharactersPage}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path="/characters/create"
              component={CharacterCreatePage}
              isAuthenticated={isAuthenticated}
            />
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
            <PrivateRoute
              exact
              path="/techniques/edit/:id"
              component={TechniqueEditPage}
              isAuthenticated={isAuthenticated}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </ServiceProvider>
  )
}
