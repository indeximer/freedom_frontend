import React from 'react'
import { Content } from '@/components/Content'
import { TechniqueItem } from './partials/TechniqueItem'

export function TechniquesList({ techniques }) {
  return (
    <Content gutterBot={true}>
      {techniques &&
        techniques.map(technique => (
          <TechniqueItem key={technique.id} technique={technique} />
        ))}
    </Content>
  )
}
