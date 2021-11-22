import React, { useState, useCallback } from 'react'
import { TechniquesList } from '@/components/TechniquesList'
import { ConfirmationModal } from '@/components/ConfirmationModal'
import { useNavigation } from '@/hooks'
import { useStore } from '@/contexts/Store'
import { useTechniquesService } from '@/services/techniques'
import { useLoader } from '@/contexts/Loader'
import { useSearch } from '@/contexts/Search'
import { FixedAddButton, SearchBar } from '@/components'
import { orderBy } from '@/utils'

export function TechniquesContainer() {
  const [openModal, setOpenModal] = useState(false)
  const [techniqueToDelete, setTechniqueToDelete] = useState()
  const { store, loadStore } = useStore()
  const { deleteTechnique } = useTechniquesService()
  const { navigateTo } = useNavigation()
  const { showSearch, closeSearch } = useSearch()
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
    .sort((a, b) => orderBy(a, b, 'updated_at'))
    .reverse()
    .map(item => ({
      ...item,
      delete: () => handleOpenModal(item.id)
    }))

  return (
    <>
      <SearchBar open={showSearch} onClose={closeSearch} />
      <TechniquesList techniques={sortedTechniques} />
      <FixedAddButton onClick={() => navigateTo('/techniques/create')} />
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
