import styled from 'styled-components'
import { indigo } from '@material-ui/core/colors'

export const StyledLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledBadge = styled.div`
  border-radius: 50%;
  color: ${indigo[900]};
  background-color: ${indigo[100]};
  width: 30px;
  height: 30px;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 1.14em;
`
