import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  header {
    height: 14.8rem;
    background-color: var(--color-background-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20.8rem;
      height: 20.8rem;
      border-radius: 50%;
      position: relative;
      top: 6.4rem;
    }
  }

  fieldset {
    width: 90%;
    border: 0;
    margin: 8rem auto 2.4rem;

    h1 {
      padding: 3.2rem 0;
      text-align: start;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      div + div {
        margin-top: 0.8rem;
      }

      button {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const GoToBack = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: 5.4rem;

  display: flex;
  align-items: center;
`;
