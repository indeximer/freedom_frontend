import { useCallback } from 'react'

export function useValidationResolver(validationSchema) {
  const validationResolver = useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        })

        return {
          values,
          errors: {}
        }
      } catch (errors) {
        const innerErros = errors?.inner || []
        const parsedErrors = innerErros.reduce((allErrors, currentError) => {
          return {
            ...allErrors,
            [`${currentError.path}`]: {
              message: currentError.message
            }
          }
        }, {})

        return {
          values: {},
          errors: parsedErrors
        }
      }
    },
    [validationSchema]
  )

  return validationResolver
}
