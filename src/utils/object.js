export const get = (obj, path, defValue) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  const result = pathArray.reduce(
    (prevObj, key) => prevObj && prevObj[`${key}`],
    obj
  )

  return !result ? defValue : result
}
