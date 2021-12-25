import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const SearchCard = styled(Paper)`
  width: 100%;
  .MuiFormControl-root {
    margin-bottom: 0;
    .MuiInput-underline:before {
      border-bottom: 0;
    }
    input {
      height: 35px;
    }
  }
`
