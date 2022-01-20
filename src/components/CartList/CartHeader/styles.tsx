import styled from 'styled-components'

const Container = styled.header`
  background-color: var(--surface);
  position: fixed;
  height: 5rem;
  width: 100%;
  top: 0;
  left: 0;

  & .header-content {
    padding: 1rem;
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .title {
      cursor: pointer;
      text-decoration: none;
      color: var(--primary);
      font-size: 2rem;
      font-family: 'Mochiy Pop P One', sans-serif;
    }
  }
`

export default Container
