import styled from 'styled-components'

const Container = styled.div`
  & .products-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 720px) {
    & .products-list {
      width: 90%;
      margin: auto;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1080px) {
    & .products-list {
      width: 80%;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default Container
