import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: var(--default-header) auto 0;
  width: 95%;

  & .empty-cart {
    display: block;
    background: red;
    width: 90%;
    padding: 2rem;
    margin: auto;
    box-shadow: 0 0 0.2rem 0.2rem #b2b2b2;
    text-align: center;

    & h1 {
      color: #b2b2b2;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 1.2rem;
    }
  }

  & .my-cart {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--surface);
  }

  & .total {
    .order {
      font-size: 2rem;
      margin-top: 2rem;
      border-bottom: 1px solid var(--surface);
      font-weight: 500;
      color: var(--surface);
    }

    & .amount-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem 2rem;

      & .products {
        font-size: 1.2rem;
      }

      & .amount {
        font-size: 1.7rem;
        font-weight: 600;
      }
    }
  }
`

export default Container
