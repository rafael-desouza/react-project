import styled from 'styled-components'

const Container = styled.div`
  .spin-loading {
    margin: auto;
    font-size: 10rem;
    color: var(--primary);
    animation: 2s ease-in infinite both running spin;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default Container
