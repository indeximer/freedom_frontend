import React, { useState, useEffect, useRef } from 'react'
import { Grid, Card, CardHeader, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { TechniqueMenu } from './TechniqueMenu'
import { TechniqueTitle, StyledAvatar } from './styles'

export function TechniqueItem({ technique }) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const handleMenuClick = () => setOpen(prevOpen => !prevOpen)
  const handleClose = () => setOpen(false)

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

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
            <IconButton onClick={handleMenuClick} ref={anchorRef}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <TechniqueMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorRef.current}
        />
      </Card>
    </Grid>
  )
}
