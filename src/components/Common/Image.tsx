import styled from 'styled-components'

const CircularImage = styled.img<{ size: number }>`
  object-fit: cover;
  border-radius: 50%;
  width: ${props => props.size ?? 30}px;
  height: ${props => props.size ?? 30}px;
`

export default CircularImage
