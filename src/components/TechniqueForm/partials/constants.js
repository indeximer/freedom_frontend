/* eslint-disable max-lines */
export const fields = {
  name: 'name',
  description: 'description',
  relatedSkill: 'related_skill',
  effect: 'effect',
  power: 'power',
  powerDescription: 'power_description',
  target: 'target',
  targetDescription: 'target_description',
  range: 'range',
  rangeDescription: 'range_description',
  castingTime: 'casting_time',
  castingTimeDescription: 'casting_time_description',
  duration: 'duration',
  durationDescription: 'duration_description',
  restrictions: 'restrictions',
  restrictionsDescription: 'restriction_description',
  extras: 'extras',
  extrasDescription: 'extras_description',
  difficulty: 'difficulty'
}

export const buffs = [
  {
    id: 0,
    value: 6,
    label: 'Melhoria',
    name: fields.power
  },
  {
    id: 1,
    value: 12,
    label: 'Melhoria considerável',
    name: fields.power
  },
  {
    id: 2,
    value: 12,
    label: 'Melhoria múltipla',
    name: fields.power
  },
  {
    id: 3,
    value: 24,
    label: 'Melhoria múltipla considerável',
    name: fields.power
  }
]

export const targets = [
  {
    id: 0,
    value: -3,
    label: 'Em si mesmo',
    name: fields.target
  },
  {
    id: 1,
    value: -3,
    label: 'Em um aliado',
    name: fields.target
  },
  {
    id: 2,
    value: 0,
    label: 'Alvo único',
    name: fields.target
  },
  {
    id: 3,
    value: 3,
    label: 'Pequena Área',
    name: fields.target
  },
  {
    id: 4,
    value: 6,
    label: 'Grande Área',
    name: fields.target
  },
  {
    id: 5,
    value: 6,
    label: 'Pequeno Grupo',
    name: fields.target
  },
  {
    id: 6,
    value: 9,
    label: 'Grande Grupo',
    name: fields.target
  }
]

export const range = [
  {
    id: 0,
    value: 0,
    label: 'Corpo-a-corpo',
    name: fields.range
  },
  {
    id: 1,
    value: 3,
    label: 'Disparo de curto alcance',
    name: fields.range
  },
  {
    id: 2,
    value: 6,
    label: 'Pouco longe',
    name: fields.range
  },
  {
    id: 3,
    value: 9,
    label: 'Longo alcance',
    name: fields.range
  },
  {
    id: 4,
    value: 12,
    label: 'Limite da visão',
    name: fields.range
  },
  {
    id: 5,
    value: 24,
    label: 'Alcance extraordinário',
    name: fields.range
  }
]

export const castingTime = [
  {
    id: 0,
    value: 6,
    label: 'Imediato',
    name: fields.castingTime
  },
  {
    id: 1,
    value: 0,
    label: 'Uma ação',
    name: fields.castingTime
  },
  {
    id: 2,
    value: -6,
    label: 'Pouco tempo',
    name: fields.castingTime
  },
  {
    id: 3,
    value: -9,
    label: 'Tempo razoável',
    name: fields.castingTime
  },
  {
    id: 4,
    value: -12,
    label: 'Tempo considerável',
    name: fields.castingTime
  }
]

export const duration = [
  {
    id: 0,
    value: 0,
    label: 'Instantâneo',
    name: fields.duration
  },
  {
    id: 1,
    value: 3,
    label: 'Um turno',
    name: fields.duration
  },
  {
    id: 2,
    value: 6,
    label: 'Pouco tempo',
    name: fields.duration
  },
  {
    id: 3,
    value: 9,
    label: 'Tempo razoável',
    name: fields.duration
  },
  {
    id: 4,
    value: 12,
    label: 'Tempo considerável',
    name: fields.duration
  },
  {
    id: 5,
    value: 15,
    label: 'Muito considerável',
    name: fields.duration
  }
]
