import React, { useState, useCallback } from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { FixedWrapper } from '@/components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MicIcon from '@material-ui/icons/Mic'
import { SearchCard } from './styles'
import useSpeechToText from 'react-hook-speech-to-text'

export function SearchBar({ open = false, onClose, searchParams, onChange }) {
  const [query, setQuery] = useState('')
  const {
    interimResult,
    isRecording,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  })

  const handleChange = useCallback(
    value => {
      setQuery(value || '')
      onChange(searchParams, value)
    },
    [setQuery, onChange, searchParams]
  )

  const handleClose = useCallback(() => {
    onClose()
    onChange(searchParams, '')
    setQuery('')
  }, [onClose, setQuery, onChange, searchParams])

  const handleRecord = useCallback(() => {
    if (!isRecording) return startSpeechToText()

    stopSpeechToText()
    handleChange(interimResult)
  }, [
    stopSpeechToText,
    startSpeechToText,
    isRecording,
    interimResult,
    handleChange
  ])

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
        <IconButton
          onClick={handleRecord}
          color={isRecording ? 'secondary' : 'default'}
        >
          <MicIcon />
        </IconButton>
      </InputAdornment>
    )
  }

  return (
    open && (
      <FixedWrapper position={{ top: 0, left: 0 }} width="100%">
        <SearchCard elevation={3} square>
          <TextField
            value={query}
            placeholder="Buscar"
            InputProps={{
              startAdornment: <CloseBtn />,
              endAdornment: <SttBtn />
            }}
            onChange={e => handleChange(e.target.value)}
            autoFocus
          />
        </SearchCard>
      </FixedWrapper>
    )
  )
}
