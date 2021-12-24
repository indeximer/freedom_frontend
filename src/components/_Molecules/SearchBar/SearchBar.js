import React, { useState, useCallback } from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { FixedWrapper } from '@/components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MicIcon from '@material-ui/icons/Mic'
import { SearchCard } from './styles'

export function SearchBar({ open = false, onClose, searchParams, onChange }) {
  const [query, setQuery] = useState('')
  const handleChange = useCallback(
    e => {
      setQuery(e.target.value)
      onChange(searchParams, e.target.value)
    },
    [setQuery, onChange, searchParams]
  )

  const handleClose = useCallback(() => {
    onClose()
    onChange(searchParams, '')
    setQuery('')
  }, [onClose, setQuery, onChange, searchParams])

  const CloseBtn = () => {
    return (
      <InputAdornment position="start">
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
      </InputAdornment>
    )
  }

  const SttBtn = () => {
    return (
      <InputAdornment position="end">
        <IconButton>
          <MicIcon />
        </IconButton>
      </InputAdornment>
    )
  }

  return (
    open && (
      <FixedWrapper position={{ top: 0, left: 0 }}>
        <SearchCard elevation={3}>
          <TextField
            value={query}
            placeholder="Buscar"
            InputProps={{
              startAdornment: <CloseBtn />,
              endAdornment: <SttBtn />
            }}
            onChange={handleChange}
          />
        </SearchCard>
      </FixedWrapper>
    )
  )
}
