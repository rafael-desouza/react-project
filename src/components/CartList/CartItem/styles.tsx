import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 1rem;
  box-shadow: 0 0 0.25rem 0.1rem var(--primary);
  margin-bottom: 1rem;

  & img {
    width: 100%;
    grid-column: 1/5;
    grid-row: 1/3;
    border-radius: 0.7rem;
  }

  & .details {
    grid-column: 5/10;
    grid-row: 1/2;

    & .item-name {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }

  .selectors {
    grid-column: 1/5;
    grid-row: 3/5;
    margin: 0.5rem auto;
    width: auto;

    & .selectors-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 0.25rem 0.1rem #808080;

      & button {
        cursor: pointer;
        border: none;
        width: 100%;
        color: red;
        border-radius: 0.25rem;
        font-size: 2rem;
        padding: 0.2rem 1rem;
      }

      & .value {
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        padding: 0.2rem 1rem;
      }
    }
  }

  .amount-info {
    justify-content: end;
    display: flex;
    align-items: flex-end;
    grid-column: 5/10;
    grid-row: 2/5;

    & .price {
      font-size: 2rem;
      font-weight: bold;
      color: red;
      margin-right: 0.5rem;
    }

    & .amount {
      font-size: 2.2rem;
      font-weight: 500;
    }
  }

  @media (min-width: 720px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(10, 1fr);

    img {
      grid-column: 1/7;
      grid-row: 1/6;
      width: 100%;
    }

    & .details {
      text-align: center;
      grid-column: 7/11;
      grid-row: 1/1;

      & .item-name {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    .selectors {
      grid-column: 7/11;
      grid-row: 4/5;
      width: 50%;

      & .selectors-control {
        & button {
          cursor: pointer;
          border: none;
          width: 100%;
          color: red;
          border-radius: 0.25rem;
          font-size: 1rem;
          padding: 0.1rem 0.5rem;
        }

        & .value {
          width: 100%;
          text-align: center;
          font-size: 0.8rem;
          padding: 0.1rem 0.5rem;
        }
      }
    }

    .amount-info {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      grid-column: 7/11;
      grid-row: 3/4;

      & .price {
        font-size: 1rem;
        font-weight: bold;
        color: red;
        margin-right: 0.5rem;
      }

      & .amount {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`

export default Container
