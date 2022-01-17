import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export default Container
