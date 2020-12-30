import React, { useState, useCallback } from 'react'
import { MessageEmitterContext } from './MessageEmitterContext'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

export function MessageEmitterProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState()
  const [severity, setSeverity] = useState()
  const config = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    autoHideDuration: 10000
  }

  const emitErrorMessage = useCallback(
    message => {
      setMessage(message)
      setSeverity('error')
      setOpen(true)
    },
    [setOpen, setMessage, setSeverity]
  )

  const emitSuccessMessage = useCallback(
    message => {
      setMessage(message)
      setSeverity('success')
      setOpen(true)
    },
    [setOpen, setMessage, setSeverity]
  )

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <MessageEmitterContext.Provider
      value={{ emitErrorMessage, emitSuccessMessage }}
    >
      <Snackbar open={open} {...config} onClose={handleClose}>
        <Alert
          severity={severity}
          variant="filled"
          elevation={3}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </MessageEmitterContext.Provider>
  )
}
