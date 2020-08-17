import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  fieldset {
    margin-top: 0.8rem;
    border: 0;

    legend {
      padding: 0.8rem 2rem;
      font: 600 2.4rem 'Poppins';
      color: var(--color-text-secondary);
    }

    form {
      padding: 2rem;

      div + div {
        margin-top: 0.8rem;
      }

      button {
        margin-top: 0.8rem;
      }
    }
  }
`;
