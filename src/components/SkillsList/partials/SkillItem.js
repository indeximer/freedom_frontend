import React, { useState } from 'react'
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Collapse,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export function SkillItem({ skill }) {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={skill.name}
          titleTypographyProps={{ variant: 'body1' }}
          subheader={skill.category}
          subheaderTypographyProps={{ variant: 'caption' }}
          action={
            <IconButton onClick={handleExpandClick}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">{skill.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
