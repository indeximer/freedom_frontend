import styled from 'styled-components'

export const StyledContent = styled.div`
  padding-bottom: ${props => (props.gutterBot ? '90px' : '20px')};
`
