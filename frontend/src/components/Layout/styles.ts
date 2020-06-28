import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 250px 2fr;
  grid-template-rows: 15vh 75vh 10vh;

  grid-template-areas:
    'aside header header'
    'aside main main'
    'aside footer footer';
`;

export const Header = styled.div`
  grid-area: header;
  background: #2d2b2c;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonPower = styled.button`
  padding: 4px 6px;
  margin-left: 64px;
  border: 0;
  border-radius: 50%;
  background-color: #d41313;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.1, '#d41313')};
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;

  margin-right: 64px;

  strong {
    margin-right: 8px;
  }

  a {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Aside = styled.aside`
  grid-area: aside;

  background: #2d2b2c;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 60px;
    margin-top: 5.3vh;
  }
`;

export const SideNav = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 32px;

  a + a {
    margin-top: 8px;
  }
`;

export const Main = styled.main`
  grid-area: main;

  background: #f9f7f4;
  border-radius: 15px 0 0 15px;
`;

export const Footer = styled.footer`
  grid-area: footer;

  background: #2d2b2c;
`;
