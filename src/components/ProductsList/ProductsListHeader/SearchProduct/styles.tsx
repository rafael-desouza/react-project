import styled from 'styled-components'

const Container = styled.div`
  & form {
    width: 80%;
    margin: 0.5rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--onPrimary);
    border-radius: 0.12rem;
  }

  .input-search {
    height: 2rem;
    border: none;
    outline: none;
    display: block;
    width: 95%;
    background-color: var(--onPrimary);
    margin-right: 2%;
  }

  .ico {
    font-size: 1.3rem;
    position: absolute;
    right: 0;
    cursor: pointer;
    fill: var(--primary);
  }
`

export default Container
