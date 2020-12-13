import { useMemo } from 'react'
import { useService } from '@/contexts/Service'

export function useSkillsService() {
  const { client } = useService()

  return useMemo(() => {
    return {
      getSkills: async () => {
        try {
          const response = await client.get('skills')
          return response
        } catch (e) {
          alert(e)
        }
      }
    }
  }, [client])
}
