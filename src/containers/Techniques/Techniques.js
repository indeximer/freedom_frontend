import React, { useState, useCallback } from 'react'
import { TechniquesList } from '@/components/TechniquesList'
import { ConfirmationModal } from '@/components/ConfirmationModal'
import { useStore } from '@/contexts/Store'
import { useTechniquesService } from '@/services/techniques'
import { useLoader } from '@/contexts/Loader'
import { useSearchContext } from '@/contexts/Search'
import { FixedAddButton, SearchBar } from '@/components'
import { useSearchFilter, useNavigation } from '@/hooks'
import { orderBy, get } from '@/utils'

export function TechniquesContainer() {
  const [openModal, setOpenModal] = useState(false)
  const [techniqueToDelete, setTechniqueToDelete] = useState()
  const { store, loadStore } = useStore()
  const { deleteTechnique } = useTechniquesService()
  const { navigateTo } = useNavigation()
  const { showSearch, closeSearch } = useSearchContext(
    get(store, 'techniques', [])
  )
  const { results, searchItems } = useSearchFilter(get(store, 'techniques', []))
  const { openLoader, closeLoader } = useLoader()

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

  const sortedTechniques = results
    .sort((a, b) => orderBy(a, b, 'updated_at'))
    .reverse()
    .map(item => ({
      ...item,
      delete: () => handleOpenModal(item.id)
    }))

  return (
    <>
      <SearchBar
        open={showSearch}
        onClose={closeSearch}
        searchParams="name|related_skill|difficulty"
        onChange={searchItems}
      />
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
