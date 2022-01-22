import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--primary);
  padding: 1%;

  & .header-content {
    padding: 1%;
    height: 70%;
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .login {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin-right: 1rem;
      color: var(--onPrimary);

      .login-ico {
        margin-right: 0.5rem;
        font-size: 2.5rem;
      }

      .login-text {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

export default Container
