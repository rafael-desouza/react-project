import styled from 'styled-components'

const Container = styled.div`
  & .link {
    list-style: none;
    text-decoration: none;
  }

  & .wrapper {
    position: relative;

    .logo {
      width: 3rem;
      height: 3rem;
      fill: var(--onPrimary);
    }

    & .cart-size {
      display: flex;
      justify-content: center;
      align-items: center;
      right: -1rem;
      top: -1rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      position: absolute;
      font-size: 1.5rem;
      background: var(--surface);
    }
  }
`

export default Container
