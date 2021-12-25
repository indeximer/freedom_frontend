import styled from 'styled-components'

export const FixedStyle = styled.div`
  z-index: 10000;
  position: fixed;
  width: ${props => (props.width ? props.width : 'auto')};
  ${props => props.position};
`
