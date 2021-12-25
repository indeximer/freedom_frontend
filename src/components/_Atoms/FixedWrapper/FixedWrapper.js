import React from 'react'
import { FixedStyle } from './styles'

export function FixedWrapper({ children, position, width = false }) {
  const positionToString = position => {
    return Object.keys(position).reduce(
      (acc, key) => `${acc}${key}:${position[`${key}`]};`,
      ''
    )
  }

  return (
    <FixedStyle position={positionToString(position)} width={width}>
      {children}
    </FixedStyle>
  )
}
