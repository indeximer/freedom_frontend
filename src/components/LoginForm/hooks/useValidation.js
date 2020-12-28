import { useMemo } from 'react'
import * as yup from 'yup'
import { useValidationResolver } from '@/hooks'

export function useValidation() {
  const validationSchema = useMemo(() => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email('Informe um e-mail válido')
        .required('O e-mail é obrigatório.'),
      password: yup.string().min(6).required()
    })

    return schema
  }, [])

  const validationResolver = useValidationResolver(validationSchema)
  return { validationResolver, validationSchema }
}
