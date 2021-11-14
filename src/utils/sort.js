import { get } from './'

export const orderBy = (a, b, path) => {
  if (get(a, path, a) > get(b, path, b)) return 1
  if (get(a, path, a) < get(b, path, b)) return -1
  return 0
}
