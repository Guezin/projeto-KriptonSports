import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 90%;
  margin: 3.2rem auto 1.6rem;

  fieldset {
    border: 0;

    legend {
      font: 600 2.4rem 'Poppins';
      color: var(--color-text-title);
    }

    form {
      margin: 1.6rem 0;

      display: flex;
      align-items: center;

      button {
        border: 0;
        background: none;
      }
    }
  }

  @media (min-width: 750px) {
    fieldset {
      width: 70%;
    }
  }

  @media (min-width: 1020px) {
    fieldset {
      width: 60%;
    }
  }
`;

export const Separator = styled.div`
  height: 4rem;
  margin: 0 3.2rem;
  border: 1px solid #fff;
`;
