import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Typography, Grid } from '@material-ui/core'

export function CharacterCreateProfile() {
  const animationProps = useSpring({
    to: { x: 0, opacity: 1 },
    from: { x: 100, opacity: 0 }
  })
  return (
    <Grid item>
      <animated.div style={animationProps}>
        <Typography>Carregue a imagem do seu personagem</Typography>
      </animated.div>
    </Grid>
  )
}
