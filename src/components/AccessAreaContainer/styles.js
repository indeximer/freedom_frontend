import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export const StyledContainer = styled(Container)`
  background-color: #f2e7fe;
  padding: 0;
`

export const StyledCol = styled(Grid)`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 100px;

  button {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1600px) {
    padding: 0 70px;
  }
  @media screen and (max-width: 1370px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 17px;
  }
`
