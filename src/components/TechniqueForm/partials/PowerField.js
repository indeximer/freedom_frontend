import React, { useState, useEffect } from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { fields, buffs } from './constants'

export function PowerField() {
  const { register, watch, setValue } = useFormContext()
  const [effect, setEffect] = useState()
  const STEP = 3

  useEffect(() => setEffect(watch(fields.effect)), [setEffect, watch])

  const EffectSlider = () => {
    return (
      <SliderInput
        label="Poder"
        min={0}
        max={30}
        step={STEP}
        name={fields.power}
        inputRef={register}
        onChange={setValue}
      />
    )
  }

  const EffectRadio = () => {
    return (
      <RadioGroup
        label="Poder"
        items={buffs}
        inputRef={register}
        type="button"
        initialItem={0}
        onChange={setValue}
      />
    )
  }

  return effect && effect === 'Melhoria' ? <EffectRadio /> : <EffectSlider />
}
