import styled, { css } from 'styled-components'
import { Card } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

export const StyledCard = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  ${props =>
    props.checked &&
    css`
      color: ${indigo[500]};
      border: 2px solid ${indigo[500]};
      background-color: ${indigo[50]};
    `}
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${indigo[500]};
  }
`
