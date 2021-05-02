import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'

import { SliderInputWrapper } from './styles'

export function SliderInput({ label, min, max, step, ...rest }) {
  const [value, setValue] = React.useState(0)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  return (
    <SliderInputWrapper>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={step}
            max={max}
            min={min}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
      </Grid>
    </SliderInputWrapper>
  )
}
