import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    button, select{
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
    }

    ul, ol{
        list-style: none;
    }
`;
