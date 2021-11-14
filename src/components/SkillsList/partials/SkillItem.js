import React, { useState } from 'react'
import {
  Grid,
  Card,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

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
          titleTypographyProps={{ variant: 'h6' }}
          subheader={skill.category}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
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
        <CardActions>
          <Button startIcon={<DeleteIcon />} color="secondary" size="small">
            Excluir
          </Button>
          <Button
            startIcon={<EditIcon />}
            color="primary"
            size="small"
            onClick={skill.onEdit}
          >
            Editar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
