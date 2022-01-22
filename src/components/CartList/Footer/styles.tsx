import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
  height: 20rem;
  width: 100%;
  background: var(--secondary);
  display: grid;
  grid-column: 50% 50%;
  grid-row: 5fr 1fr;
  padding: 2rem;

  .logo {
    display: block;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .social-medias {
    grid-column: 2/3;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .ico {
      font-size: 3rem;
      fill: var(--onPrimary);
    }
  }

  .company-data {
    grid-column: 1/3;
    grid-row: 2/3;
    color: var(--onPrimary);
    text-align: center;
  }
`

export default Container
