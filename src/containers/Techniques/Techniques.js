import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { FixedWrapper } from './styles'
import { useNavigation } from '@/hooks'

export function TechniquesContainer() {
  const { navigateTo } = useNavigation()

  return (
    <FixedWrapper>
      <Fab color="primary" onClick={() => navigateTo('/techniques/create')}>
        <AddIcon />
      </Fab>
    </FixedWrapper>
  )
}
