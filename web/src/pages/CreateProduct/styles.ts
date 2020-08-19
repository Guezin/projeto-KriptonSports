import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  fieldset {
    width: 90%;
    margin: 3.2rem auto;
    border: 0;

    legend {
      font: 600 2.4rem 'Poppins';
      color: var(--color-text-secondary);
    }

    form {
      margin: 2.4rem auto 0.8rem;

      div + div {
        margin-top: 0.8rem;
      }

      button {
        margin-top: 1.6rem;
      }
    }
  }
`;
