import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  header {
    height: 19rem;
    background-color: var(--color-background-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20.8rem;
      height: 20.8rem;
      border-radius: 50%;
      position: relative;
      top: 8rem;
    }
  }

  fieldset {
    width: 90%;
    border: 0;
    margin: 8rem auto 2.4rem;

    legend {
      padding: 3.2rem 0;
      font: 600 2.4rem 'Poppins';
      text-align: start;
      color: var(--color-text-title);
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

  @media (min-width: 750px) {
    fieldset {
      max-width: 40%;
    }
  }

  @media (min-width: 1100px) {
    fieldset {
      max-width: 30%;
    }
  }
`;

export const GoToBack = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: 15%;

  display: flex;
  align-items: center;
`;
