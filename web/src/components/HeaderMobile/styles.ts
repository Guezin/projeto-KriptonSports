import styled, { keyframes, css } from 'styled-components';

interface IContainerProps {
  showMenu: boolean;
  hideMenu: boolean;
}

const showMenuAnimation = keyframes`
  from {
    height: 18.2rem;
  } to {
    height: 51.2rem;
  }
`;

const hideMenuAnimation = keyframes`
  from {
    height: 51.2rem;
  } to {
    height: 18.2rem;
  }
`;

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 18.2rem;
  padding: 3.2rem 1.6rem;
  background-color: var(--color-background-secondary);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 12.4rem;
      height: 5.2rem;
    }
  }

  main {
    margin-top: 3.2rem;
    padding: 0.8rem 1.6rem;

    display: flex;
    justify-content: space-between;

    button {
      border: 0;
      background-color: transparent;
    }
  }

  ${props =>
    props.hideMenu &&
    css`
      animation: ${hideMenuAnimation} 1s ease-in forwards;
    `}

  ${props =>
    props.showMenu &&
    css`
      animation: ${showMenuAnimation} 1s ease-in forwards;
    `}

  @media(min-width: 1020px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1.6rem;
    font: 500 1.6rem 'Poppins';
    color: var(--color-text-secondary);
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
