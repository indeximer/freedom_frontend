import React from 'react'
import { Grid, Card, CardHeader, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { TechniqueTitle, StyledAvatar } from './styles'

export function TechniqueItem({ technique }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={
            <TechniqueTitle>
              {technique.name}{' '}
              <StyledAvatar>{technique.difficulty}</StyledAvatar>
            </TechniqueTitle>
          }
          titleTypographyProps={{ variant: 'h6' }}
          subheader={technique.related_skill}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
          action={
            <IconButton onClick="">
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Card>
    </Grid>
  )
}
