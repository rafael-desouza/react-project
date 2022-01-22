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
      display: flex;
      flex-direction: column;
      padding: 1.5rem 1rem;

      .order {
        font-size: 1.5rem;
        border-bottom: 1px solid var(--primary);
        font-weight: 500;
        color: var(--primary);
      }

      & .amount-info {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .products {
          font-size: 1rem;
        }

        & .amount {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }

      .close {
        margin-top: 0.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .btn-close-order {
          color: var(--onPrimary);
          background-color: var(--primary);
          border: none;
          border-radius: 0.25rem;
          padding: 0.5rem 0.8rem;
          outline: none;
          transition: all 0.5s;

          &:hover {
            background-color: var(--onPrimary);
            color: var(--primary);
            box-shadow: 0 0 1px 1px var(--primary);
          }
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
