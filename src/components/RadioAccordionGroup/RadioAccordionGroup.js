import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Content } from '@/components/Content'
import { RadioItem } from './partials/RadioItem'

export function RadioAccordionGroup({ label, items, inputRef }) {
  const [selectedItem, setSelectedItem] = useState(items[0].value)

  const handleRadioChange = event => {
    event.stopPropagation()
    setSelectedItem(event.target.value)
  }

  return (
    <Content>
      <Grid item xs={12}>
        <Typography variant="h6">{label}</Typography>
      </Grid>
      {items &&
        items.map(item => (
          <RadioItem
            item={item}
            key={item.value}
            inputRef={inputRef}
            isChecked={selectedItem === item.value}
            handleChange={handleRadioChange}
            setSelectedItem={setSelectedItem}
          />
        ))}
    </Content>
  )
}
