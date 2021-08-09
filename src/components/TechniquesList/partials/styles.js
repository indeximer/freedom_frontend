import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

export const TechniqueTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledAvatar = styled(Avatar)`
  background-color: ${purple[50]};
  color: ${purple[900]};
  width: 30px;
  height: 30px;
  font-size: 1rem;
`
