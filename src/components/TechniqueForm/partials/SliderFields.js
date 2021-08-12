import React from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { fields, targets, range, castingTime, duration } from './constants'

export function SliderFields() {
  const { register } = useFormContext()

  const STEP = 3

  return (
    <>
      <SliderInput
        label="Poder"
        min={0}
        max={30}
        step={STEP}
        name={fields.power}
        inputRef={register}
      />
      <RadioGroup
        label="Área de atuação"
        items={targets}
        inputRef={register}
        type="button"
        initialItem={2}
      />
      <RadioGroup
        label="Alcance"
        items={range}
        inputRef={register}
        type="button"
        initialItem={0}
      />
      <RadioGroup
        label="Tempo de execução"
        items={castingTime}
        inputRef={register}
        type="button"
        initialItem={1}
      />
      <RadioGroup
        label="Duração"
        items={duration}
        inputRef={register}
        type="button"
        initialItem={0}
      />

      <SliderInput
        label="Restrições"
        min={-6}
        max={0}
        step={STEP}
        name={fields.restrictions}
        inputRef={register}
      />
      <SliderInput
        label="Extras"
        min={-6}
        max={6}
        step={STEP}
        name={fields.extras}
        inputRef={register}
      />
    </>
  )
}
