import React from 'react'
import { FixedWrapper } from '@/components'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export function FixedAddButton({ onClick }) {
  return (
    <FixedWrapper position={{ right: '16px', bottom: '16px' }}>
      <Fab color="primary" onClick={onClick}>
        <AddIcon />
      </Fab>
    </FixedWrapper>
  )
}
