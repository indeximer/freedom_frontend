import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Typography, Grid, TextField } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'
import { OutstandingFeaturesField } from './partials/OutstandingFeaturesField'

const PATH_NAME = 'name'

export function CharacterCreateProfile() {
  const { register } = useFormContext()
  const animationProps = useSpring({
    to: { x: 0, opacity: 1 },
    from: { x: 100, opacity: 0 }
  })
  return (
    <Grid item>
      <animated.div style={animationProps}>
        <Grid item>
          <Typography>Descreva as características do seu Personagem</Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="text"
            name={PATH_NAME}
            // helperText={getError(fields.name)}
            // error={!!getError(fields.name)}
            label="Nome"
            inputRef={register}
            defaultValue=""
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="text"
            name={PATH_NAME}
            helperText={`Este valor deverá ser informado pelo Mestre.`}
            // error={!!getError(fields.name)}
            label="Nível da Aventura"
            inputRef={register}
            defaultValue=""
          />
        </Grid>
        <Grid item>
          <Typography>Características Marcantes</Typography>
        </Grid>
        <Grid item>
          <OutstandingFeaturesField />
        </Grid>
      </animated.div>
    </Grid>
  )
}
