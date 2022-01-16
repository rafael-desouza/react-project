import styled from 'styled-components'

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: var(--primary);
  color: var(--onPrimary);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover,
  :active {
    background-color: var(--onPrimary);
    color: var(--primary);

    & .cart-size {
      background-color: var(--primary);
      color: var(--onPrimary);
    }

    & .cart-icon {
      color: var(--primary);
    }
  }

  & .cart-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  & .cart-size {
    background-color: var(--onPrimary);
    color: var(--primary);
    padding: 0.25rem 1rem;
    border-radius: 1.5rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  @media (max-width: 720px) {
    padding: 0.5rem 1rem;
    justify-content: center;

    & .cart-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0;
    }

    & .cart-content {
      display: none;
    }

    & .cart-size {
      background-color: var(--onPrimary);
      margin-left: 0;
      color: var(--primary);
      padding: 0.25rem 1rem;
      border-radius: 1.5rem;
      font-weight: bold;
    }
  }
`

export default Container
