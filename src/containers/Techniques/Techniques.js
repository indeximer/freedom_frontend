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
  const techniques = store?.techniques || []
  const sortedTechniques = techniques.sort(
    (a, b) => b.updated_at - a.updated_at
  )

  return (
    <>
      <TechniquesList techniques={sortedTechniques} />
      <FixedWrapper>
        <Fab color="primary" onClick={() => navigateTo('/techniques/create')}>
          <AddIcon />
        </Fab>
      </FixedWrapper>
    </>
  )
}
