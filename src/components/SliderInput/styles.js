import styled from 'styled-components'

export const SliderInputWrapper = styled.div`
  margin-bottom: 10px;
  display: ${({ show = true }) => (show ? 'block' : 'none')};
`
