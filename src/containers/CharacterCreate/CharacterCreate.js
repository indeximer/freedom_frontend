import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Hidden,
  Grid
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { CharacterCreateProfile } from '@/components/CharacterCreateProfile'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'

const steps = ['Perfil', 'Habilidades', 'Poderes', 'Toques Finais']

export function CharacterCreateContainer() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = () =>
    setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleBackStep = () =>
    setActiveStep(prevActiveStep => prevActiveStep - 1)

  return (
    <Content gutterBot={60}>
      <Grid item xs={12}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>
                <Hidden xsDown>{label}</Hidden>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <CharacterCreateProfile />
      <Footer>
        <Grid item xs={3}>
          <Button
            size="medium"
            disabled={activeStep === 0}
            onClick={handleBackStep}
          >
            Voltar
          </Button>
        </Grid>
        <Grid item xs={5} lg={2}>
          {activeStep !== steps.length - 1 && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleNextStep}
            >
              Avançar
            </Button>
          )}
        </Grid>
        <Grid item xs={4} lg={2}>
          {activeStep === steps.length - 1 && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<CheckIcon />}
              fullWidth
            >
              Finalizar
            </Button>
          )}
        </Grid>
      </Footer>
    </Content>
  )
}
