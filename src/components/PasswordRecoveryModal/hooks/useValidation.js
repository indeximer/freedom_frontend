import { useMemo } from 'react'
import * as yup from 'yup'
import { useValidationResolver } from '@/hooks'

export function useValidation() {
  const validationSchema = useMemo(() => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .max(80, 'Máximo de 80 caracteres permitidos.')
        .email('Informe um e-mail válido')
        .required('O e-mail é obrigatório.')
    })

    return schema
  }, [])

  const validationResolver = useValidationResolver(validationSchema)
  return { validationResolver, validationSchema }
}
