import styled from 'styled-components'

export const Image = styled.img<{ size: number }>`
  object-fit: contain;
  width: ${props => props.size ?? 30}px;
  height: ${props => props.size ?? 30}px;
`

export const CircularImage = styled(Image)`
  border-radius: 50%;
`
