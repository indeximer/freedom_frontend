import React, { useCallback } from 'react'
import { Select } from '@/components/Select'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { useStore } from '@/contexts/Store'
import { RadioGroup } from '@/components/RadioGroup'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import SettingsIcon from '@material-ui/icons/Settings'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import { fields } from './constants'
import { getIdByDescription, getDefaultValue } from './utils'

export function TextFields() {
  const { register, getError, setValue, data } = useFormContext()
  const { store } = useStore()
  const skills = store?.skills || []
  const skillsOptions = skills.map(skill => skill?.name)

  const handleChangeRadio = useCallback(
    item => {
      setValue(item.name, item?.value)
    },
    [setValue]
  )

  const effects = [
    {
      id: 0,
      value: 'Ofensivo',
      label: 'Ofensivo',
      name: fields.effect,
      description:
        'É o mais simples de se entender e utilizar. Ele causa dano, é o que normalmente traz complicações e tem poder de encerrar batalhas rapidamente. Alvos que forem afetados com um poder Ofensivo, devem rolar contra o seu valor de Poder.',
      icon: WhatshotIcon
    },
    {
      id: 1,
      value: 'Melhoria',
      label: 'Melhoria',
      name: fields.effect,
      description:
        'Envolve os efeitos que, como o nome diz, melhoram a situação do alvo. Quanto mais efetiva ou quantos mais habilidades uma melhoria afetar, maior é necessário que seja o seu valor de Poder.',
      icon: LocalHospitalIcon
    },
    {
      id: 2,
      value: 'Dinâmico',
      label: 'Dinâmico',
      name: fields.effect,
      description:
        ' São efeitos que não possuem um valor de Poder fixo, ao invés disso o seu poder é determinado cada vez que forem utilizados. Dissipar Magia, Detectar o Mal e Discernir Mentiras são exemplos de habilidades que dependem da rolagem do momento, não tendo uma dificuldade específica.',
      icon: SettingsIcon
    },
    {
      id: 3,
      value: 'Outros',
      label: 'Outros',
      name: fields.effect,
      description:
        'Efeitos que não se aplicam exatamente como efeitos de melhoria, não se comportam como efeitos de dano e não são tão variáveis como os efeitos dinâmicos. Efeitos como, Parede, Teleporte e Curar se aplicam nestes casos. A dificuldade para a conjuração dependerá de cada efeito, lembrando que efeitos mais poderosos devem ter um valor de Poder mais alto.',
      icon: AllInclusiveIcon
    }
  ]

  return (
    <>
      <TextField
        variant="outlined"
        type="text"
        name={fields.name}
        helperText={getError(fields.name)}
        error={!!getError(fields.name)}
        label="Nome da técnica"
        inputRef={register}
        defaultValue={getDefaultValue(fields.name, data)}
      />
      <TextField
        variant="outlined"
        multiline
        minRows={3}
        name={fields.description}
        helperText={getError(fields.description)}
        error={!!getError(fields.description)}
        label="Descrição"
        inputRef={register}
        defaultValue={getDefaultValue(fields.description, data)}
      />
      <Select
        options={skillsOptions}
        freeSolo={true}
        label="Habilidade Relacionada"
        name={fields.relatedSkill}
        helperText={getError(fields.relatedSkill)}
        error={!!getError(fields.relatedSkill)}
        value={getDefaultValue(fields.relatedSkill, data)}
        inputRef={register}
      />
      <RadioGroup
        label="Efeito"
        items={effects}
        inputRef={register}
        onChange={handleChangeRadio}
        initialItem={getIdByDescription(effects, data?.effect)}
      />
    </>
  )
}
