import { useMemo } from 'react'
import * as yup from 'yup'
import { useValidationResolver } from '@/hooks'

export function useValidation() {
  const validationSchema = useMemo(() => {
    const schema = yup.object().shape({
      name: yup
        .string()
        .max(200, 'Máximo de 200 caracteres permitidos.')
        .required('O nome é obrigatório.'),
      category: yup
        .string()
        .max(200, 'Máximo de 200 caracteres permitidos.')
        .required('A categoria é obrigatória.'),
      description: yup
        .string()
        .max(1000, 'Máximo de 1000 caracteres permitidos.')
        .required('A descrição é obrigatória.')
    })

    return schema
  }, [])

  const validationResolver = useValidationResolver(validationSchema)
  return { validationResolver, validationSchema }
}
