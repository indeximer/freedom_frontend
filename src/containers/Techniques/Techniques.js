import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { FixedWrapper } from './styles'
import { useNavigation } from '@/hooks'
import { useStore } from '@/contexts/Store'

export function TechniquesContainer() {
  const { store } = useStore()
  const { navigateTo } = useNavigation()

  return (
    <>
      <ul>
        {store?.techniques &&
          store?.techniques.map(technique => (
            <li key={technique.id}>{`${technique.name} - ${technique.id}`}</li>
          ))}
      </ul>
      <FixedWrapper>
        <Fab color="primary" onClick={() => navigateTo('/techniques/create')}>
          <AddIcon />
        </Fab>
      </FixedWrapper>
    </>
  )
}
