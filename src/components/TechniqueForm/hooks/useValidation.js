import { useMemo } from 'react'
import * as yup from 'yup'
import { useValidationResolver } from '@/hooks'

export function useValidation() {
  const validationSchema = useMemo(() => {
    const schema = yup.object().shape({
      name: yup
        .string()
        .max(200, 'Máximo de 200 caracteres permitidos.')
        .required('O nome da técnica é obrigatório'),
      description: yup
        .string()
        .max(1000, 'Máximo de 1000 caracteres permitidos.')
        .required('A descrição é obrigatória'),
      related_skill: yup.string().required('Escolha uma técnica relacionada.'),
      effect: yup.string().required('Escolha um efeito.'),
      power: yup.number(),
      target: yup.number(),
      range: yup.number(),
      casting_time: yup.number(),
      duration: yup.number(),
      restrictions: yup.number(),
      restriction_description: yup
        .string()
        .max(1000, 'Máximo de 1000 caracteres permitidos.')
        .when('restrictions', {
          is: restrictionValue => restrictionValue !== 0,
          then: yup.string().required('Descreva as restrições da técnica.')
        }),
      extras: yup.number(),
      extras_description: yup
        .string()
        .max(1000, 'Máximo de 1000 caracteres permitidos.')
        .when('extras', {
          is: extrasValue => extrasValue !== 0,
          then: yup.string().required('Descreva as restrições da técnica.')
        })
    })

    return schema
  }, [])

  const validationResolver = useValidationResolver(validationSchema)
  return { validationResolver, validationSchema }
}
