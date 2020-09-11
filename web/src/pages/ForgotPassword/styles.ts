import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;

  img {
    width: 100%;
  }

  fieldset {
    border: 0;

    legend {
      margin-bottom: 3.2rem;
      text-align: center;
      font: 600 2.4rem 'Poppins';
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
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
    }

    fieldset {
      max-width: 70%;

      legend {
        font-size: 3.6rem;
      }
    }
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'logo content';

    img {
      grid-area: logo;
      width: 100%;
    }

    fieldset {
      grid-area: content;
      margin: auto;

      legend {
        width: 100%;
      }
    }
  }
`;

export const BackToSignIn = styled.div`
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

  @media (min-width: 1020px) {
    grid-area: content;
    padding: 0;
    margin-top: 32rem;
  }
`;
