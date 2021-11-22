import React from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { FixedWrapper } from '@/components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MicIcon from '@material-ui/icons/Mic'
import { SearchCard } from './styles'

export function SearchBar({ open = false, onClose }) {
  const CloseBtn = () => {
    return (
      <InputAdornment position="start">
        <IconButton onClick={onClose}>
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
            placeholder="Buscar"
            InputProps={{
              startAdornment: <CloseBtn />,
              endAdornment: <SttBtn />
            }}
          />
        </SearchCard>
      </FixedWrapper>
    )
  )
}
