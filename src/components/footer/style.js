import { styled } from "styled-components";


export const Container = styled.div`
    background-color: rgb(51, 51, 51);
    color: rgb(255, 255, 255);
    padding: 30px;

    .nameTitle{
        font-weight: 400;
    }

    .homeP{
        width: 53px;
        margin-top: 30px;
        padding-bottom: 5px;
        border-bottom: 2px solid rgb(255, 255, 255);

        cursor: pointer;
    }

    .menu{
        display: flex;
        margin-top: 30px;

        li{
            cursor: pointer;
            margin-right: 15px;
        }
    }

    @media (min-width: 780px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .homeP{
            margin-top: 0;
        }

        .menu{
            margin-top: 0;
        }
    }
`;


