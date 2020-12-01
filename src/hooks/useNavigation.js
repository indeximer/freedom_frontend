import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export function useNavigation() {
  const history = useHistory()

  const navigateTo = useCallback(path => history.push(path), [history])
  const navigateBack = useCallback(() => history.goBack(), [history])
  const redirectTo = useCallback(path => history.replace(path), [history])

  return { navigateTo, navigateBack, redirectTo }
}
