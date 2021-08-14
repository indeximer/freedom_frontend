import React from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { targets, range, castingTime, duration } from './constants'
import { PowerField } from './PowerField'

export function SliderFields() {
  const { register, setValue } = useFormContext()

  return (
    <>
      <PowerField />
      <RadioGroup
        label="Área de atuação"
        items={targets}
        inputRef={register}
        type="button"
        initialItem={2}
        onChange={setValue}
      />
      <RadioGroup
        label="Alcance"
        items={range}
        inputRef={register}
        type="button"
        initialItem={0}
        onChange={setValue}
      />
      <RadioGroup
        label="Tempo de execução"
        items={castingTime}
        inputRef={register}
        type="button"
        initialItem={1}
        onChange={setValue}
      />
      <RadioGroup
        label="Duração"
        items={duration}
        inputRef={register}
        type="button"
        initialItem={0}
        onChange={setValue}
      />
    </>
  )
}
