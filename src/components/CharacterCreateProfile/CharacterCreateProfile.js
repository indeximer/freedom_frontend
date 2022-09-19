import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { StyledCharacterCreateProfile } from './styles'

export function CharacterCreateProfile() {
  return (
    <StyledCharacterCreateProfile>
      <Avatar />
      <Typography>Carregue a imagem do seu personagem</Typography>
    </StyledCharacterCreateProfile>
  )
}
