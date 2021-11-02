import React, { useState, useEffect, useCallback } from 'react'
import { SliderInput } from '@/components/SliderInput'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@/components/RadioGroup'
import { fields, buffs } from './constants'
import { getDefaultValue, getIdByDescription } from './utils'

export function PowerField() {
  const { watch, setValue, getValues, data } = useFormContext()
  const [effect, setEffect] = useState(data?.effect || 'Ofensivo')
  const [powerSliderValue, setPowerSliderValue] = useState(
    getDefaultValue(fields?.power, data, 0)
  )
  const [powerRadioValue, setPowerRadioValue] = useState(
    getIdByDescription(buffs, data?.power_description, 0)
  )
  const STEP = 3

  const resetInputValue = useCallback(
    newEffect => {
      if (newEffect === 'Melhoria') {
        setValue(fields.power, 6)
        setPowerRadioValue(0)
      } else {
        setValue(fields.power, 0)
        setPowerSliderValue(0)
      }
    },
    [setValue, setPowerRadioValue, setPowerSliderValue]
  )

  useEffect(() => {
    const currentEffect = effect
    const newEffect = watch(fields.effect)

    if (currentEffect !== newEffect) {
      setEffect(newEffect)
      resetInputValue(newEffect)
    }
  }, [setEffect, watch, resetInputValue, effect])

  const handleChangeSlider = useCallback(
    value => {
      setValue(fields.power, value)
    },
    [setValue]
  )

  const handleChangeRadio = useCallback(
    item => {
      if (parseInt(getValues(fields.power)) === item?.value) return false
      setValue(fields.power, item?.value)
      setValue(fields.powerDescription, item.label)
    },
    [setValue, getValues]
  )

  return (
    <>
      <SliderInput
        show={effect !== 'Melhoria'}
        label="Poder"
        min={0}
        max={30}
        step={STEP}
        onChange={handleChangeSlider}
        defaultValue={powerSliderValue}
      />

      <RadioGroup
        show={effect === 'Melhoria'}
        label="Poder"
        items={buffs}
        name="power-radio"
        type="button"
        initialItem={powerRadioValue}
        onChange={handleChangeRadio}
      />
    </>
  )
}
