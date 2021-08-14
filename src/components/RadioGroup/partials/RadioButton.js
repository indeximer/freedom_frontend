import React from 'react'
import { Grid, Radio } from '@material-ui/core'

import { StyledButton } from '../styles'

export function RadioButton({ item, inputRef, handleChange, isChecked }) {
  return (
    <Grid item>
      <StyledButton
        variant="outlined"
        size="small"
        checked={isChecked}
        onClick={handleChange}
      >
        {item.label}
        <Radio
          checked={isChecked}
          name={item.name}
          value={item.value}
          inputRef={inputRef}
        />
      </StyledButton>
    </Grid>
  )
}
