import React, { useState } from 'react'
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
  onChange = () => null,
  ...rest
}) {
  const [value, setValue] = useState(0)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
    onChange(rest.name, Number(newValue))
  }

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
    onChange(rest.name, Number(event.target.value))
  }

  return (
    <SliderInputWrapper>
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
