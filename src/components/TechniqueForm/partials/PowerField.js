import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { fields, buffs } from './constants'

export function PowerField() {
  const { register, watch, setValue } = useFormContext()
  const [effect, setEffect] = useState()
  const STEP = 3

  const resetInputValue = useCallback(
    newEffect => {
      if (newEffect === 'Melhoria') setValue(fields.power, 6)
      else setValue(fields.power, 0)
    },
    [setValue]
  )

  useEffect(() => {
    const currentEffect = effect
    const newEffect = watch(fields.effect)
    setEffect(newEffect)
    if (currentEffect !== newEffect) resetInputValue(newEffect)
  }, [setEffect, watch, resetInputValue, effect])

  const EffectSlider = useMemo(() => {
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
  }, [register, setValue])

  const EffectRadio = useMemo(() => {
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
  }, [setValue, register])

  return effect && effect === 'Melhoria' ? EffectRadio : EffectSlider
}
