import styled from 'styled-components'

export const FixedStyle = styled.div`
  z-index: 10000;
  position: fixed;
  ${props => props.position}
`
