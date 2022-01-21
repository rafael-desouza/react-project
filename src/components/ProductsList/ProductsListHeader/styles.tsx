import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--primary);
  height: var(--default-header);
  display: flex;
  align-items: center;
  z-index: 1;

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
