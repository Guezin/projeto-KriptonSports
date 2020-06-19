import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 250px 2fr;
  grid-template-rows: 15vh 75vh 10vh;

  grid-template-areas:
    'header header header'
    'aside main main'
    'aside footer footer';
`;

export const Header = styled.div`
  grid-area: header;

  background: #2D2B2C;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
    height: 60px;
    margin-left: 40px;
  }

`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;

  margin-right: 40px;

  a {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;

    }


  }
`;

export const Aside = styled.aside`
  grid-area: aside;

  background: #2D2B2C;
`;

export const SideNav = styled.div`
  height: 100%;

  a + a {
    margin-top: 4px;
  }

`;

export const Main = styled.main`
  grid-area: main;

  background: #F9F7F4;
  border-radius: 15px 0 0 15px;
`;

export const Footer = styled.footer`
  grid-area: footer;

  background: #2D2B2C;
`;
