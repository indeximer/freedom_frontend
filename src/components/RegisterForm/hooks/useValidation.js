import { useMemo } from 'react'
import * as yup from 'yup'
import { useValidationResolver } from '@/hooks'

export function useValidation() {
  const validationSchema = useMemo(() => {
    const schema = yup.object().shape({
      displayName: yup
        .string()
        .max(80, 'Máximo de 80 caracteres permitidos.')
        .required('O nome de exibição é obrigatório'),
      email: yup
        .string()
        .max(80, 'Máximo de 80 caracteres permitidos.')
        .email('Informe um e-mail válido')
        .required('O e-mail é obrigatório.'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .max(80, 'Máximo de 80 caracteres permitidos.')
        .required('A senha é obrigatória'),
      passwordConfirmation: yup
        .string()
        .required('Por favor, confirme sua senha.')
        .oneOf([yup.ref('password'), null], 'As senhas deve ser as mesmas.')
    })

    return schema
  }, [])

  const validationResolver = useValidationResolver(validationSchema)
  return { validationResolver, validationSchema }
}
