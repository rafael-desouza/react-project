import styled from 'styled-components'

const Container = styled.div.attrs((props: { img_url: string }) => props)`
  position: relative;
  width: 95%;
  height: 60vh;
  margin: auto;
  background-image: url(${props => props.img_url});
  background-size: cover;
  background-position: center;

  .close-modal {
    right: 0;
    position: absolute;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 2rem;
      height: 0.2rem;
      background-color: white;
      border-radius: 2px;
      top: 16px;
      box-shadow: 0 0 2px 0 #ccc;
    }

    &:before {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      transform: rotate(45deg);
      right: 2px;
    }

    &:after {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      transform: rotate(-45deg);
      right: 2px;
    }
  }

  @media (min-width: 720px) {
    height: 65vh;
  }

  @media (min-width: 1080px) {
    width: 100%;
    height: 75vh;
  }
`

export default Container
