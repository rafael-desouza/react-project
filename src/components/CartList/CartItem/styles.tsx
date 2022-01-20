import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 1rem;
  box-shadow: 0 0 0.25rem 0.1rem var(--surface);
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

    & .info {
      font-size: 1.1rem;
      text-align: left;
    }
  }

  .selectors {
    grid-column: 1/5;
    grid-row: 3/5;
    margin-top: 0.5rem;

    & .selectors-control {
      width: 70%;
      margin: auto;
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
      }

      & .value {
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
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
    img {
      grid-column: 1/5;
      grid-row: 1/5;
    }

    & .details {
      grid-column: 5/10;
      grid-row: 1/3;
    }

    .selectors {
      width: 50%;
      align-items: flex-start;
      grid-column: 5/8;
      grid-row: 3/5;
    }

    .amount-info {
      height: 100%;
      align-items: flex-start;
      grid-column: 8/10;
      grid-row: 3/5;
    }
  }

  @media (min-width: 1080px) {
    & .details {
      grid-column: 5/10;
      grid-row: 1/3;

      & .item-name {
        font-size: 2rem;
        font-weight: bold;
      }

      & .info {
        font-size: 1.8rem;
        text-align: left;
      }
    }

    .amount-info {
      height: 100%;
      grid-column: 8/10;
      grid-row: 3/5;

      & .price {
        font-size: 1.5rem;
        font-weight: bold;
      }

      & .amount {
        font-size: 2rem;
        line-height: 3.4rem;
      }
    }
  }
`

export default Container
