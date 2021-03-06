import styled from 'styled-components'

const Container = styled.span`
  & div {
    font-family: 'Courier Prime', sans-serif;
    color: var(--onPrimary);
    font-weight: bolder;
    position: relative;
    font-size: 2.5rem;
    user-select: none;

    ::before {
      content: ' ';
      display: block;
      width: 60%;
      margin-left: 40%;
      height: 0.4rem;
      margin-bottom: 0.25rem;
      background: white;
    }

    :after {
      content: ' ';
      display: block;
      width: 60%;
      height: 0.4rem;
      margin-top: 0.25rem;
      background: white;
    }
  }
`

export default Container
