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
      fill: var(--onSurface);
    }

    & .cart-size {
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      top: -10%;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      font-size: 1rem;
      background: var(--primary);
    }
  }
`

export default Container
