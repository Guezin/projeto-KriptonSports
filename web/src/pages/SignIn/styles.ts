import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;

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

  @media (min-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
    }

    fieldset {
      min-width: 80%;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'logo content'
      'logo nav';

    img {
      grid-area: logo;
      width: 100%;
      align-self: flex-start;
    }

    fieldset {
      grid-area: content;
      margin: auto;
    }

    nav {
      grid-area: nav;
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

  @media (min-width: 1100px) {
    margin-top: -6.2rem;
  }
`;

export const CreateAccount = styled.div`
  margin-top: 6.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font: 500 1.6rem 'Archivo';
    color: var(--color-text-secondary);
  }

  svg {
    margin-right: 0.8rem;
  }
`;
