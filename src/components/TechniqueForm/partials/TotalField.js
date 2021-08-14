import React, { useState, useEffect } from 'react'
import { Typography, InputBase } from '@material-ui/core'
import { fields } from './constants'
import { useFormContext } from 'react-hook-form'

export function TotalField() {
  const { register, watch } = useFormContext()
  const [value, setValue] = useState(0)

  useEffect(() => {
    const totalDifficulty =
      parseInt(watch(fields.power)) +
      parseInt(watch(fields.target)) +
      parseInt(watch(fields.castingTime)) +
      parseInt(watch(fields.duration)) +
      parseInt(watch(fields.restrictions)) +
      parseInt(watch(fields.extras))

    setValue(totalDifficulty)
  }, [setValue, watch])

  return (
    <>
      <Typography display="inline">Dificuldade: </Typography>
      <Typography display="inline" color="primary">
        <strong>{value}</strong>
      </Typography>
      <InputBase
        type="hidden"
        inputRef={register}
        name={fields.difficulty}
        value={value}
      />
    </>
  )
}
