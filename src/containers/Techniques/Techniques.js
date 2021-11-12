import React, { useState, useCallback } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { TechniquesList } from '@/components/TechniquesList'
import { ConfirmationModal } from '@/components/ConfirmationModal'
import { FixedWrapper } from './styles'
import { useNavigation } from '@/hooks'
import { useStore } from '@/contexts/Store'
import { useTechniquesService } from '@/services/techniques'
import { useLoader } from '@/contexts/Loader'

export function TechniquesContainer() {
  const [openModal, setOpenModal] = useState(false)
  const [techniqueToDelete, setTechniqueToDelete] = useState()
  const { store, loadStore } = useStore()
  const { deleteTechnique } = useTechniquesService()
  const { navigateTo } = useNavigation()
  const { openLoader, closeLoader } = useLoader()
  const techniques = store?.techniques || []

  const handleDeleteTechnique = useCallback(async () => {
    openLoader()
    setOpenModal(false)
    await deleteTechnique(techniqueToDelete)
    await loadStore()
    closeLoader()
  }, [
    techniqueToDelete,
    setOpenModal,
    deleteTechnique,
    openLoader,
    closeLoader,
    loadStore
  ])

  const handleOpenModal = techniqueId => {
    setTechniqueToDelete(techniqueId)
    setOpenModal(true)
  }

  const sortedTechniques = techniques
    .sort((a, b) => b.updated_at - a.updated_at)
    .map(item => ({
      ...item,
      delete: () => handleOpenModal(item.id)
    }))

  return (
    <>
      <TechniquesList techniques={sortedTechniques} />
      <FixedWrapper>
        <Fab color="primary" onClick={() => navigateTo('/techniques/create')}>
          <AddIcon />
        </Fab>
      </FixedWrapper>
      <ConfirmationModal
        open={openModal}
        title="Tem certeza de que deseja deletar a técnica?"
        message="A remoção da técnica é permanente e não poderá ser desfeita. Caso tenha dúvidas, clique em Cancelar."
        handleClose={() => setOpenModal(false)}
        handleConfirm={handleDeleteTechnique}
      />
    </>
  )
}
