import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--surface);

  & .header-content {
    padding: 1rem;
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .title {
      color: var(--primary);
      font-size: 2rem;
      font-family: 'Mochiy Pop P One', sans-serif;
    }
  }
`

export default Container
