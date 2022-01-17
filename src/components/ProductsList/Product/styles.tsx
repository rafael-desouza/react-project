import styled from 'styled-components'

const Container = styled.div.attrs((props: { img_url: string }) => props)`
  width: 90%;
  height: 60rem;
  margin: 1rem auto;
  border-radius: 1.5rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  & .top-wrapper {
    cursor: zoom-in;
    display: block;
    height: 80%;
    background-image: url(${props => props.img_url});
    background-position: center;
  }

  & .bottom-wrapper {
    height: 20%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;

    & .bottom-content {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;

      & .item-name {
        font-size: 2rem;
        font-weight: 600;
      }

      & .item-price {
        font-size: 2rem;
      }
    }
  }

  & .bottom-ico {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s;
    border-radius: 0 0 1.5rem 0;

    & .cart-add-icon {
      fill: var(--primary);
      padding: 1rem;
      height: 7rem;
      width: 7rem;
      cursor: pointer;
      transition: transform 0.5s, fill 0.5s;
      user-select: none;
    }

    :hover,
    :active {
      background-color: var(--primary);

      & .cart-add-icon {
        transform: translateY(0.5rem);
        fill: var(--onPrimary);
      }
    }
  }

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 720px) {
    height: 30em;

    & .bottom-wrapper {
      & .bottom-content {
        & .item-name {
          font-size: 0.9rem;
          font-weight: 600;
        }

        & .item-price {
          font-size: 1.2rem;
        }
      }
    }

    & .bottom-ico {
      & .cart-add-icon {
        height: 5rem;
        width: 5rem;
      }
    }
  }
`

export default Container
