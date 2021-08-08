import React from 'react'
import { Select } from '@/components/Select'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { useStore } from '@/contexts/Store'

export function TextFields() {
  const { register, getError } = useFormContext()
  const { store } = useStore()
  const skills = store?.skills || []
  const skillsOptions = skills.map(skill => ({
    value: skill?.name,
    name: skill?.name
  }))
  const fields = {
    name: 'name',
    description: 'description',
    relatedSkill: 'related_skill',
    effect: 'effect'
  }
  const effects = [
    { value: 'Ofensivo' },
    { value: 'Melhoria' },
    { value: 'Dinâmico' },
    { value: 'Outros' }
  ]
  return (
    <>
      <TextField
        variant="outlined"
        name={fields.name}
        helperText={getError(fields.name)}
        error={!!getError(fields.name)}
        label="Nome da técnica"
        inputRef={register}
      />
      <TextField
        variant="outlined"
        name={fields.description}
        helperText={getError(fields.description)}
        error={!!getError(fields.description)}
        label="Descrição"
        inputRef={register}
      />
      <Select
        options={skillsOptions}
        optionLabelAttr="name"
        label="Habilidade Relacionada"
        name={fields.relatedSkill}
        helperText={getError(fields.relatedSkill)}
        error={!!getError(fields.relatedSkill)}
        inputRef={register}
      />
      <Select
        options={effects}
        optionLabelAttr="value"
        label="Efeito"
        name={fields.effect}
        helperText={getError(fields.effect)}
        error={!!getError(fields.effect)}
        inputRef={register}
      />
    </>
  )
}
