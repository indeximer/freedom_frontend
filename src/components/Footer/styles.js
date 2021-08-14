import styled from 'styled-components'
import { indigo } from '@material-ui/core/colors'

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${indigo[50]};
  height: 56px;
  display: flex;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 2px 4px 1px rgb(0 0 0 / 20%), 0px 8px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`
