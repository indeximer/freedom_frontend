import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Content } from '@/components/Content'
import { RadioCard } from './partials/RadioCard'
import { RadioButton } from './partials/RadioButton'
import { StyledLabel, StyledBadge } from './styles'

export function RadioGroup({
  label,
  items,
  inputRef,
  initialItem = false,
  type = 'card'
}) {
  const initialItemState = initialItem === false ? items[0].id : initialItem
  const [selectedItem, setSelectedItem] = useState(initialItemState)

  const handleRadioChange = (event, id) => {
    event.stopPropagation()
    setSelectedItem(id)
  }

  return (
    <Content>
      <Grid item xs={12}>
        <StyledLabel>
          <Typography variant="h6">{label}</Typography>
          <StyledBadge show={type !== 'card'}>
            {items?.[`${selectedItem}`].value}
          </StyledBadge>
        </StyledLabel>
      </Grid>
      {items &&
        items.map(item =>
          type === 'card' ? (
            <RadioCard
              item={item}
              key={item.id}
              inputRef={inputRef}
              isChecked={selectedItem === item.id}
              handleChange={event => handleRadioChange(event, item.id)}
              setSelectedItem={setSelectedItem}
            />
          ) : (
            <RadioButton
              item={item}
              key={item.id}
              inputRef={inputRef}
              isChecked={selectedItem === item.id}
              handleChange={event => handleRadioChange(event, item.id)}
              setSelectedItem={setSelectedItem}
            />
          )
        )}
    </Content>
  )
}
