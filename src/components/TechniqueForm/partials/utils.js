export const getIdByDescription = (items, description) =>
  items.findIndex(item => item.label === description)
