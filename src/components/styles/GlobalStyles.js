import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --color-1: rgb(0, 0, 62);
    --color-2: rgb(120, 103, 33);
    --color-3: rgb(150, 11, 11);
    --color-4: #0c4e00;

    --font-1: rgb(255, 255, 255);

    --contact-a: orange;
    --contact-p: red;
    --contact-to: green;

    --contact-to-hover: blue;


    /* menuCard */

    --menu-box-bg: transparent;

    --menu-box-bg-hover: transparent;

    --menu-box-border: #808080;

    --menu-dish-name-color: #8c0000;

    --menu-dish-q-color: black;

    --menu-dish-desc-color: #000000;

    --menu-dish-price-color: #0c4e00;

  }

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }
`