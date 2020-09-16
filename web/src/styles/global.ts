import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html,
  body,
  #root {
    height: 100vh;
    background-color: var(--color-background-primary);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font: 600 2.4rem 'Poppins';
    color: var(--color-text-title);
  }

  input {
    font: 500 1.6rem 'Poppins';
    color: var(--color-text-base);
  }

  button {
    font: 600 1.6rem 'Poppins';
    cursor: pointer;
  }

  :root {
    font-size: 60%;

    --color-text-primary: #2E2A2A;
    --color-text-secondary: #F4EDE8;
    --color-text-title: #F4EDE8;
    --color-background-primary: #2D2B2C;
    --color-background-secondary: #202020;
    --color-content-primary: #F4EDE8;
    --color-button-primary: #E41414;
    --color-button-secondary: #10CE5C;
    --color-button-text: #fff;
    --color-button-edit: #1D68D8;
    --color-button-delete: #E41414;
    --color-button-select: #1D68D8;
    --color-input-background: #262424;
    --color-input-border-primary: #262424;
    --color-input-border-focus: #F4EDE8;
    --color-input-border-error: #FE1212;
    --color-input-placeholder: #666360;
    --color-filter-in-checkbox: #1D68D8;
    --color-filter-out-checkbox: #666360;


  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
