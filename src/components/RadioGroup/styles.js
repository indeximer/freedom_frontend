import styled, { css } from 'styled-components'
import { Card, Button } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

export const RadioGroupWrapper = styled.div`
  display: ${({ show = true }) => (show ? 'block' : 'none')};
`

export const StyledCard = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${props =>
    props.checked &&
    css`
      color: ${indigo[500]};
      border: 2px solid ${indigo[500]};
      background-color: ${indigo[50]};
    `}
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${indigo[900]};
  }
`

export const StyledButton = styled(Button)`
  text-transform: none;
  border-radius: 17px;
  padding: 2px 12px;
  ${props =>
    props.checked &&
    css`
      color: ${indigo[500]};
      border: 1px solid ${indigo[500]};
      background-color: ${indigo[50]};
    `}
  &:hover {
    background-color: ${indigo[50]};
  }
  .MuiRadio-root {
    display: none;
  }
`
