export function mapDocs(docs) {
  return docs.map(doc => parseDoc(doc))
}

export function parseDoc(doc) {
  return {
    id: doc.id,
    ...doc.data()
  }
}

export function checkUrlPath(url) {
  const splittedUrl = url.split('/')
  if (splittedUrl.length > 1) return splittedUrl
  return false
}

export function handleParams(query, options) {
  const { params } = options && options?.params
  if (!params) return query

  Object.entries.array.forEach(([key, value]) => {
    query.where(key, '==', value)
  })
  return query
}
