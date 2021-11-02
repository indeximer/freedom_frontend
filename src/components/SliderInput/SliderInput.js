import React, { useState, useEffect } from 'react'
import { Label } from '@/components/Label'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'

import { SliderInputWrapper } from './styles'

export function SliderInput({
  label,
  min,
  max,
  step,
  inputRef,
  name,
  show,
  defaultValue = 0,
  onChange = () => null,
  ...rest
}) {
  const [value, setValue] = useState(0)
  useEffect(() => setValue(defaultValue), [setValue, defaultValue])

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
    if (name) onChange(name, Number(newValue))
    else onChange(Number(newValue))
  }

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  return (
    <SliderInputWrapper show={show}>
      <Label labelText={label} badgeText={value} />
      <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        step={step}
        max={max}
        min={min}
      />
      <Input
        value={value}
        name={name}
        margin="dense"
        onChange={handleInputChange}
        inputRef={inputRef}
        inputProps={{
          step: step,
          min: min,
          max: max,
          type: 'hidden',
          'aria-labelledby': 'input-slider'
        }}
        {...rest}
      />
    </SliderInputWrapper>
  )
}
