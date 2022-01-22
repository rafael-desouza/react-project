import styled from 'styled-components'

const Container = styled.div`
  & .products-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  & .loading {
    margin-top: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .empty-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    width: 90%;
    padding: 2rem;
    margin: 2rem auto;
    box-shadow: 0 0 0.2rem 0.2rem #b2b2b2;

    & .ico {
      font-size: 5rem;
      fill: #bbb;
      margin-bottom: 1rem;
    }

    & span {
      color: var(--primary);
      font-weight: bolder;
    }

    & ul {
      width: 50%;
      margin-top: 1rem;

      & li {
        border-bottom: 1px solid #bbb;
      }
    }
  }

  @media (min-width: 720px) {
    & .products-list {
      width: 80%;
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
