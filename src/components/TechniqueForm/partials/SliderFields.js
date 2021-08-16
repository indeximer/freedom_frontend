import React, { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { targets, range, castingTime, duration } from './constants'
import { PowerField } from './PowerField'
import { getIdByDescription } from './utils'

export function SliderFields() {
  const { register, setValue, getValues } = useFormContext()
  const values = getValues()

  const handleChangeRadio = useCallback(
    item => {
      setValue(item.name, item?.value)
      setValue(`${item.name}_description`, item.label)
    },
    [setValue]
  )

  return (
    <>
      <PowerField />
      <RadioGroup
        label="Área de atuação"
        items={targets}
        inputRef={register}
        type="button"
        initialItem={getIdByDescription(targets, values.target_description)}
        onChange={handleChangeRadio}
      />
      <RadioGroup
        label="Alcance"
        items={range}
        inputRef={register}
        type="button"
        initialItem={getIdByDescription(range, values.range_description)}
        onChange={handleChangeRadio}
      />
      <RadioGroup
        label="Tempo de execução"
        items={castingTime}
        inputRef={register}
        type="button"
        initialItem={getIdByDescription(
          castingTime,
          values.casting_time_description
        )}
        onChange={handleChangeRadio}
      />
      <RadioGroup
        label="Duração"
        items={duration}
        inputRef={register}
        type="button"
        initialItem={getIdByDescription(duration, values.duration_description)}
        onChange={handleChangeRadio}
      />
    </>
  )
}
