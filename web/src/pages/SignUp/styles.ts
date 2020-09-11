import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;

  img {
    width: 100%;
    margin-top: 12.8rem;
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
      margin-top: 0;
      width: 90%;
    }

    fieldset {
      max-width: 70%;

      h1 {
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
    }
  }
`;

export const BackToSignIn = styled.div`
  padding: 5.4rem 0;

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
    margin-top: 51.2rem;
  }
`;
