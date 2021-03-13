import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

export const MenuWrapper = styled.div`
  width: 300px;
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const HeroTitleWrapper = styled.div`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.common.white};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
