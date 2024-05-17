import {createGlobalStyle} from 'styled-components';
import { colors } from './Variables';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        
        font-family: 'Nunito', sans-serif;
        box-sizing: border-box;
    }

    html, body, #root{
        max-width: 1440px;
        margin: 0 auto;
    }

    body{
        background: ${colors.white};
        -webkit-font-smoothing: antialised !important;

        &::-webkit-scrollbar{
            padding-right: 1px;
            width: 10px;
            background: transparent;
        } 

        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            border: 6px solid ${colors.gray};
        }
    }

    body, input, button{
        color: ${colors.black};
        font-size: 14px;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
`;
