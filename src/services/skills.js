import { useMemo } from 'react'
import { useService } from '@/contexts/Service'

export function useSkillsService() {
  const { client } = useService()
  const URL = 'skills'

  return useMemo(() => {
    return {
      getSkills: async () => {
        try {
          const response = await client.get(URL)
          return response
        } catch (error) {
          alert(error)
        }
      },
      createSkill: async payload => {
        try {
          const response = await client.post(URL, payload)
          return response
        } catch (error) {
          alert(error)
        }
      },
      updateSkill: async (id, payload) => {
        try {
          const response = await client.put(`${URL}/${id}`, payload)
          return response
        } catch (error) {
          alert(error)
        }
      },
      deleteSkill: async (id, payload) => {
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
