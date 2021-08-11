import React from 'react'
import { Select } from '@/components/Select'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { useStore } from '@/contexts/Store'
import { RadioAccordionGroup } from '@/components/RadioAccordionGroup'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import SettingsIcon from '@material-ui/icons/Settings'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'

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
    {
      value: 'Ofensivo',
      label: 'Ofensivo',
      name: fields.effect,
      description:
        'É o mais simples de se entender e utilizar. Ele causa dano, é o que normalmente traz complicações e tem poder de encerrar batalhas rapidamente. Alvos que forem afetados com um poder Ofensivo, devem rolar contra o seu valor de Poder.',
      icon: WhatshotIcon
    },
    {
      value: 'Melhoria',
      label: 'Melhoria',
      name: fields.effect,
      description:
        'Envolve os efeitos que, como o nome diz, melhoram a situação do alvo. Quanto mais efetiva ou quantos mais habilidades uma melhoria afetar, maior é necessário que seja o seu valor de Poder.',
      icon: LocalHospitalIcon
    },
    {
      value: 'Dinâmico',
      label: 'Dinâmico',
      name: fields.effect,
      description:
        ' São efeitos que não possuem um valor de Poder fixo, ao invés disso o seu poder é determinado cada vez que forem utilizados. Dissipar Magia, Detectar o Mal e Discernir Mentiras são exemplos de habilidades que dependem da rolagem do momento, não tendo uma dificuldade específica.',
      icon: SettingsIcon
    },
    {
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
      {/* <Select
        options={effects}
        optionLabelAttr="value"
        label="Efeito"
        name={fields.effect}
        helperText={getError(fields.effect)}
        error={!!getError(fields.effect)}
        inputRef={register}
      /> */}
      <RadioAccordionGroup label="Efeito" items={effects} inputRef={register} />
    </>
  )
}
