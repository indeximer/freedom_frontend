import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useNavigation } from '@/hooks'
import { useLoader } from '@/contexts/Loader'
import { AccessAreaContainer } from '@/components/AccessAreaContainer'
import Typography from '@material-ui/core/Typography'
import { RegisterForm } from '@/components/RegisterForm'

export function RegisterContainer() {
  const { register, logIn } = useAuthenticationContext()
  const { navigateTo } = useNavigation()
  const { openLoader, closeLoader } = useLoader()

  const handleRegister = useCallback(
    async formData => {
      openLoader()
      const { displayName, email, password } = formData
      try {
        await register(email, password, displayName)
        await logIn(email, password)
        closeLoader()
        navigateTo('/')
      } catch (e) {
        closeLoader()
        alert('Erro no cadastro')
      }
    },
    [openLoader, closeLoader, navigateTo, register, logIn]
  )

  return (
    <AccessAreaContainer>
      <Typography variant="h2" color="primary" gutterBottom>
        Inicie sua jornada!
      </Typography>
      <Typography variant="subtitle2" paragraph>
        Crie sua conta
      </Typography>
      <RegisterForm onSubmit={handleRegister} />
      <Typography variant="subtitle1">
        <Link to="/login">Voltar</Link>
      </Typography>
    </AccessAreaContainer>
  )
}
