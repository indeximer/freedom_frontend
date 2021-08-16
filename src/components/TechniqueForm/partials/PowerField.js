import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { fields, buffs } from './constants'
import { getIdByDescription } from './utils'

const getInitialItem = getValues => {
  return getIdByDescription(buffs, getValues('power_description')) || 0
}

export function PowerField() {
  const { register, watch, setValue, getValues } = useFormContext()
  const [effect, setEffect] = useState()
  const STEP = 3
  const initialItem = getInitialItem(getValues)

  const resetInputValue = useCallback(
    newEffect => {
      if (newEffect === 'Melhoria') setValue(fields.power, 6)
      else setValue(fields.power, 0)
    },
    [setValue]
  )

  const handleChangeRadio = useCallback(
    item => {
      setValue(item.name, item?.value)
      setValue(`${item.name}_description`, item.label)
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
        initialItem={initialItem}
        onChange={handleChangeRadio}
      />
    )
  }, [register, handleChangeRadio, initialItem])

  return effect && effect === 'Melhoria' ? EffectRadio : EffectSlider
}
