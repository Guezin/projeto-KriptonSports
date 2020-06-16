import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  header {
    background: #232323;
    height: 144px;
    position: relative;

    svg {
      position: absolute;
      top: 58px;
      left: 186px;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 200px;
        height: 200px;
        margin-top: 40px;
        border-radius: 50%;
      }
    }

    @media (max-width: 585px) {
      svg {
        top: 58px;
        left: 50px;
        animation: ${appearFromLeft} 1s;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin-top: 60px;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 46px;
      margin: 56px auto 24px 0;
    }

    & + div {
      margin-top: 20px;
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
  }
`;
