import styled, { keyframes, css } from 'styled-components';

interface IContainerProps {
  showMenu: boolean;
  hideMenu: boolean;
}

interface INavProps {
  showMenu: boolean;
  hideMenu: boolean;
}

const showMenuAnimation = keyframes`
  from {
    height: 28%;
  } to {
    height: 90%;
  }
`;

const hideMenuAnimation = keyframes`
  from {
    height: 90%;
  } to {
    height: 19rem;
  }
`;

export const Container = styled.div<IContainerProps>`
  width: 100%;
  padding: 3.2rem 1.6rem 1.6rem;
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

const animationNav = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Nav = styled.nav<INavProps>`
  height: calc(100% - 10rem);
  animation: ${animationNav} 1s ease-in forwards;
  display: none;

  a {
    width: 80%;
    padding: 1.6rem 0;
    font: 600 2rem 'Poppins';
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-text-secondary);
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin: auto;
    }
  }

  ${props =>
    props.hideMenu &&
    css`
      display: none;
    `}

  ${props =>
    props.showMenu &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;
