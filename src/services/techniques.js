import { useMemo } from 'react'
import { useService } from '@/contexts/Service'

export function useTechniquesService() {
  const { client } = useService()
  const URL = 'techniques'

  return useMemo(() => {
    return {
      getTechniques: async () => {
        try {
          const response = await client.get(URL)
          return response
        } catch (error) {
          alert(error)
        }
      },
      createTechnique: async payload => {
        try {
          const response = await client.post(URL, payload)
          return response
        } catch (error) {
          alert(error)
        }
      }
    }
  }, [client])
}
