export const formatPostPayload = (formData, user) => {
  const formattedPayload = {
    ...formData,
    user: user.uid,
    created_at: Date.now(),
    updated_at: Date.now()
  }
  return formattedPayload
}

export const formatPutPayload = (formData, user) => {
  const formattedPayload = {
    ...formData,
    updated_at: Date.now()
  }

  delete formatPostPayload?.id
  return formattedPayload
}
