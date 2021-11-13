import React from 'react'
import { FixedWrapper } from './styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export function FixedAddButton({ onClick }) {
  return (
    <FixedWrapper>
      <Fab color="primary" onClick={onClick}>
        <AddIcon />
      </Fab>
    </FixedWrapper>
  )
}
