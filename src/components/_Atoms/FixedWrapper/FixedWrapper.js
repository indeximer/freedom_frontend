import React from 'react'
import { FixedStyle } from './styles'

export function FixedWrapper({ children, position }) {
  const positionToString = position => {
    return Object.keys(position).reduce(
      (acc, key) => `${acc}${key}:${position[`${key}`]};`,
      ''
    )
  }

  return (
    <FixedStyle position={positionToString(position)}>{children}</FixedStyle>
  )
}
