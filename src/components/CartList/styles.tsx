import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  & .content {
    width: 90%;
    margin: auto;
    & .empty-cart {
      display: block;
      background: #f0f0f0;
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
      color: var(--primary);
    }

    & .total {
      .order {
        font-size: 2rem;
        margin-top: 2rem;
        border-bottom: 1px solid var(--primary);
        font-weight: 500;
        color: var(--primary);
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
  }

  @media (min-width: 720px) {
    .content {
      width: 60%;
    }
  }
`

export default Container
