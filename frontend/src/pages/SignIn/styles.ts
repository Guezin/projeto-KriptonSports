import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1120px) {
    flex: 1;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  } to {
    opacity: 1
    transform: translateX(0)
  }
`;

export const AnimationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 46px;
      margin-bottom: 56px;
    }

    button {
      width: 100%;
      height: 50px;
      margin-top: 38px;
      background: #fe1212;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      border-style: none;
      border-radius: 7px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#fe1212')};
      }
    }

    a {
      margin-top: 24px;
    }
  }

  > a {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${darken(0.2, '#FFF')};
    }
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1120px) {
    img {
      display: none;
    }
  }
`;
