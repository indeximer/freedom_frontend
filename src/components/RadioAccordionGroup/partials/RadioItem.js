import React from 'react'
import {
  Grid,
  CardHeader,
  CardContent,
  Collapse,
  Typography
} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import { StyledCard } from './styles'

export function RadioItem({
  item,
  inputRef,
  handleChange,
  isChecked,
  setSelectedItem
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <StyledCard
        onClick={() => setSelectedItem(item.value)}
        variant="outlined"
        checked={isChecked}
      >
        <CardHeader
          title={item.label}
          titleTypographyProps={{ variant: 'body1' }}
          avatar={<item.icon />}
          action={
            <Radio
              onClick={e => e.stopPropagation()}
              checked={isChecked}
              name={item.name}
              value={item.value}
              inputRef={inputRef}
              onChange={handleChange}
            />
          }
        />
        <Collapse in={isChecked} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">{item.description}</Typography>
          </CardContent>
        </Collapse>
      </StyledCard>
    </Grid>
  )
}
