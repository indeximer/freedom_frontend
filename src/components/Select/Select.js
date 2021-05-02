import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export function Select({ options, optionLabelAttr, label, name }) {
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      name={name}
      options={options}
      getOptionLabel={option => option?.[`${optionLabelAttr}`] || ''}
      renderInput={params => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}
