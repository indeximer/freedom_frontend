import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { TechniquesList } from '@/components/TechniquesList'
import { FixedWrapper } from './styles'
import { useNavigation } from '@/hooks'
import { useStore } from '@/contexts/Store'

export function TechniquesContainer() {
  const { store } = useStore()
  const { navigateTo } = useNavigation()

  return (
    <>
      <TechniquesList techniques={store?.techniques} />
      <FixedWrapper>
        <Fab color="primary" onClick={() => navigateTo('/techniques/create')}>
          <AddIcon />
        </Fab>
      </FixedWrapper>
    </>
  )
}
