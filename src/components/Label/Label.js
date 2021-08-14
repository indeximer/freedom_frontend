import React from 'react'
import { StyledBadge, StyledLabel } from './styles'
import { Typography } from '@material-ui/core'

export function Label({ labelText, badgeText = false }) {
  return (
    <StyledLabel>
      <Typography variant="h6">{labelText}</Typography>
      <StyledBadge show={badgeText !== false}>{badgeText}</StyledBadge>
    </StyledLabel>
  )
}
