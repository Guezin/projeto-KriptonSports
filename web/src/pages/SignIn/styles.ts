import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;

  img {
    width: 100%;
  }

  fieldset {
    border: 0;

    h1 {
      margin-bottom: 3.2rem;
      text-align: center;
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

export const ForgotPassword = styled.div`
  margin-top: 4.2rem;
  text-align: center;

  a {
    font: 500 1.6rem 'Archivo';
    color: var(--color-text-secondary);
  }
`;

export const CreateAccount = styled.div`
  margin-top: 6.2rem;

  a {
    font: 500 1.6rem 'Archivo';
    color: var(--color-text-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.8rem;
    }
  }
`;
