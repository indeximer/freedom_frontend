import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Content } from '@/components/Content'
import { RadioCard } from './partials/RadioCard'
import { RadioButton } from './partials/RadioButton'
import { Label } from '@/components/Label'
import { getBadgeText } from './utils'

export function RadioGroup({
  label,
  items,
  inputRef,
  initialItem = false,
  onChange = () => null,
  type = 'card'
}) {
  const initialItemState = initialItem === false ? items[0].id : initialItem
  const [selectedItem, setSelectedItem] = useState(initialItemState)

  const handleRadioChange = item => {
    setSelectedItem(item.id)
    onChange(item)
  }

  return (
    <Content spacing={1}>
      <Grid item xs={12}>
        <Label
          labelText={label}
          badgeText={getBadgeText(type, items?.[`${selectedItem}`].value)}
        />
      </Grid>
      {items &&
        items.map(item =>
          type === 'card' ? (
            <RadioCard
              item={item}
              key={item.id}
              inputRef={inputRef}
              isChecked={selectedItem === item.id}
              handleChange={() => handleRadioChange(item)}
            />
          ) : (
            <RadioButton
              item={item}
              key={item.id}
              inputRef={inputRef}
              isChecked={selectedItem === item.id}
              handleChange={() => handleRadioChange(item)}
            />
          )
        )}
    </Content>
  )
}
