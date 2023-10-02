import { createGlobalStyle } from "styled-components";
import backgroundImagem from "../assets/Background.jpg";
import Arrow from "../assets/icons/Arrow.svg"

export default createGlobalStyle<{$scrollPage: boolean}>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        ${({$scrollPage}) => $scrollPage && 'height: 100vh'}
    }

    html {
        font-size: 62.5%;
    }

    #root {
        padding: 3rem 2rem;
        
        background-image: url(${backgroundImagem});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        font: 1.8rem 'Montserrat', sans-serif;
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: 8px; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 6px;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        padding: 1rem;
        background-image: url(${Arrow});
        background-position: right center;
        background-repeat: no-repeat;
        background-origin: content-box;
        background-size: 1.2rem;

        background-color: #363636;
        color: #FFF;
        
        border: none;
        border-radius: 8px;

        font: 1.5rem 'Montserrat', sans-serif;

        cursor: pointer;

        option {
            padding: 1rem;
        }
    }

`