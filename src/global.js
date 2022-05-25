import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

    :root{
        font-size: 8px;
        font-family:'Inter', sans-serif;
        --color-primary:#FF577F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --color-error: #E83F5B;

    }

    body{
        background-color: var(--grey-4);
    }

    button{
        cursor: pointer;
    }
`