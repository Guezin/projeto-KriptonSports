import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  header {
    grid-area: header;
  }

  aside {
    grid-area: nav-bar;
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: 256px 1fr;
    grid-template-rows: 130px 1fr;
    grid-template-areas:
      'logo header header'
      'nav-bar content content';
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  background-color: var(--color-background-secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 14rem;
    height: 6rem;
    grid-area: logo;
  }

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;

  grid-area: content;
`;
