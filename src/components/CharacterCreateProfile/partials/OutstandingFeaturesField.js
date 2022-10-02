import React, { useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useFormContext, useFieldArray } from 'react-hook-form'

export function OutstandingFeaturesField() {
  const { register } = useFormContext()
  const { fields, append } = useFieldArray({
    name: 'outstanding_features',
    rules: { minLength: 3 }
  })

  useEffect(() => {
    if (fields.length === 0) append([{ name: '' }, { name: '' }, { name: '' }])
  }, [fields, append])
  return (
    <>
      {fields.map((field, index) => (
        <TextField
          variant="outlined"
          type="text"
          key={field.id}
          {...register(`outstanding_features.${index}.value`)}
        />
      ))}
      <Button
        size="small"
        variant="contained"
        type="button"
        onClick={() => append({ name: '' })}
      >
        Adicionar
      </Button>
    </>
  )
}
