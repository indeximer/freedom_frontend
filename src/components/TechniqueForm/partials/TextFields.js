import React from 'react'
import { Select } from '@/components/Select'
import TextField from '@material-ui/core/TextField'

export function TextFields() {
  const skills = [{ value: 'magia', name: 'Magia' }]
  const effects = [
    { value: 'Ofensivo' },
    { value: 'Melhoria' },
    { value: 'Dinâmico' },
    { value: 'Outros' }
  ]
  return (
    <>
      <TextField variant="outlined" name="name" label="Nome da técnica" />
      <TextField variant="outlined" name="description" label="Descrição" />
      <Select
        options={skills}
        optionLabelAttr="name"
        label="Habilidade Relacionada"
        name="related-skill"
      />
      <Select
        options={effects}
        optionLabelAttr="value"
        label="Efeito"
        name="effect"
      />
    </>
  )
}
