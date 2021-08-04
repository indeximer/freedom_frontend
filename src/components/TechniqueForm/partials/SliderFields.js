import React from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'

export function SliderFields() {
  const { register } = useFormContext()
  const fields = {
    power: 'power',
    area: 'area',
    range: 'range',
    castingTime: 'casting_time',
    duration: 'duration',
    restrictions: 'restrictions',
    extras: 'extras'
  }
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
      <SliderInput
        label="Área de Atuação"
        min={-3}
        max={9}
        step={STEP}
        name={fields.area}
        inputRef={register}
      />
      <SliderInput
        label="Alcance"
        min={0}
        max={24}
        step={STEP}
        name={fields.range}
        inputRef={register}
      />
      <SliderInput
        label="Tempo de execução"
        min={-12}
        max={6}
        step={STEP}
        name={fields.castingTime}
        inputRef={register}
      />
      <SliderInput
        label="Duração"
        min={0}
        max={15}
        step={STEP}
        name={fields.duration}
        inputRef={register}
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
