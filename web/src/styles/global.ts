import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, #root {
    background-color: var(--color-primary)
  }

  h1, h2 {
    font: 600 2.4rem 'Poppins';
    color: var(--color-text-title);
  }

  input {
    font: 500 1.8rem 'Poppins';
    color: var(--color-text-base);
  }

  button {
    font: 500 1.8rem 'Poppins';
    cursor: pointer;
  }

  :root {
    font-size: 60%;

    --color-text-base: #2E2A2A;
    --color-text-title: #fff;
    --color-primary: #2D2B2C;
    --color-secondary: #202020;
    --color-content-primary: #F9F7F4;
    --color-button-primary: #FE1212;
    --color-button-secondary: #10CE5C
    --color-button-text: #fff;
    --color-input-border-primary: #666360;
    --color-input-border-focus: #F4EDE8;
    --color-input-border-error: #FE1212;
    --color-input-placeholder: #666360;

  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;