import React from 'react'
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Typography
} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'

export function RadioItem({
  item,
  inputRef,
  handleChange,
  isChecked,
  setSelectedItem
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card onClick={() => setSelectedItem(item.value)} variant="outlined">
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
      </Card>
    </Grid>
  )
}
