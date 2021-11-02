export const getIdByDescription = (items, description, defaultItem = 0) => {
  const itemId = items.findIndex(item => item.label === description)
  return itemId >= 0 ? itemId : defaultItem
}

export const getDefaultValue = (fieldName, data, defaultValue = '') =>
  data?.[`${fieldName}`] || defaultValue
