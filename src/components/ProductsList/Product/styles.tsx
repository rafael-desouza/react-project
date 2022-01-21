import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin: 1rem auto;
  padding: 2%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 30%;
  transform: scale(0.95);
  border-radius: 0.25rem;
  box-shadow: 0 0 0rem 0.1rem rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  & img {
    display: block;
    border-radius: 0.2rem;
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/3;
    cursor: zoom-in;
  }

  & .content {
    margin-left: 5%;
    padding-top: 5%;
    grid-column: 2/3;
    grid-row: 1/2;

    .item-name {
      font-size: 1.8rem;
    }

    .item-price {
      text-align: right;
      margin-right: 2%;
      margin-top: 5%;
      font-size: 1.5em;
      font-weight: bold;

      & span {
        font-size: 2rem;
        color: var(--primary);
        display: inline-block;
        margin-right: 1%;
      }
    }
  }

  & .cart-add-icon {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2/2;
    grid-row: 2/3;
    position: relative;
    font-size: 2rem;
    border-top: 0.1rem solid var(--primary);
    cursor: pointer;
    transition: all 0.5s, fill 0.5s;

    span {
      transition: all 0.5s, fill 0.5s;
    }

    :hover,
    :active {
      width: 95%;
      font-weight: bolder;
      border-top: 0.3rem solid var(--primary);

      span {
        transform: translateY(0.2rem);
        letter-spacing: 0.2rem;
        color: var(--primary);
      }
    }
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;

    &:hover {
      transform: scale(1);
      box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
    }

    & img {
      height: 40vh;
      grid-column: 1/3;
      grid-row: 1/2;
    }

    & .content {
      padding-top: 2%;
      grid-column: 1/3;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;

      .item-name {
        font-size: 1.8rem;
        text-align: center;
        line-height: 1.8rem;
      }

      .item-price {
        width: 100%;
        text-align: right;
        margin-right: 2%;
        font-size: 1.5em;
        font-weight: bold;

        & span {
          font-size: 2rem;
          color: var(--primary);
          display: inline-block;
          margin-right: 1%;
        }
      }
    }

    & .cart-add-icon {
      grid-row: 3/4;
      grid-column: 1/3;
      width: 80%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-size: 2rem;
      border-top: 0.1rem solid var(--primary);
      cursor: pointer;
      transition: all 0.5s, fill 0.5s;

      span {
        transition: all 0.5s, fill 0.5s;
      }

      :hover,
      :active {
        width: 95%;
        font-weight: bolder;
        border-top: 0.3rem solid var(--primary);

        span {
          transform: translateX(10%);
          color: var(--primary);
        }
      }
    }
  }
`

export default Container
