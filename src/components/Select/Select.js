import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export function Select({
  options,
  label,
  name,
  inputRef,
  error,
  helperText,
  value
}) {
  const [selectValue, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value) setValue(value)
  }, [value, setValue])

  return (
    <Autocomplete
      value={selectValue}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      options={options}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          name={name}
          helperText={helperText}
          error={error}
          inputRef={inputRef}
          value="Magia"
        />
      )}
    />
  )
}
