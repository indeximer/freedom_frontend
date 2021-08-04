import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export function Select({
  options,
  optionLabelAttr,
  label,
  name,
  inputRef,
  error,
  helperText
}) {
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
      options={options}
      getOptionLabel={option => option?.[`${optionLabelAttr}`] || ''}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          name={name}
          helperText={helperText}
          error={error}
          inputRef={inputRef}
        />
      )}
    />
  )
}
