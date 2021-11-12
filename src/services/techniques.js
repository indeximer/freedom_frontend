import { useMemo } from 'react'
import { useService } from '@/contexts/Service'

export function useTechniquesService() {
  const { client } = useService()
  const URL = 'techniques'

  return useMemo(() => {
    return {
      getTechniqueById: async id => {
        try {
          const response = await client.get(`${URL}/${id}`)
          return response
        } catch (error) {
          alert(error)
        }
      },
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
      },
      updateTechnique: async (id, payload) => {
        try {
          const response = await client.put(`${URL}/${id}`, payload)
          return response
        } catch (error) {
          alert(error)
        }
      },
      deleteTechnique: async (id, payload) => {
        try {
          const response = await client.delete(`${URL}/${id}`)
          return response
        } catch (error) {
          alert(error)
        }
      }
    }
  }, [client])
}
