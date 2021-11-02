import React, { useState, useEffect } from 'react'
import { Typography, InputBase } from '@material-ui/core'
import { fields } from './constants'
import { useFormContext } from 'react-hook-form'

export function TotalField() {
  const { register, watch, data } = useFormContext()
  const [value, setValue] = useState(data?.difficulty || 0)

  useEffect(() => {
    const totalDifficulty =
      Number(watch(fields.power)) +
      Number(watch(fields.target)) +
      Number(watch(fields.range)) +
      Number(watch(fields.castingTime)) +
      Number(watch(fields.duration)) +
      Number(watch(fields.restrictions)) +
      Number(watch(fields.extras))

    setValue(totalDifficulty)
  }, [setValue, watch, value])

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
