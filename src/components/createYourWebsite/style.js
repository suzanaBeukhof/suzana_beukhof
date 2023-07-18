import { styled } from "styled-components";
import background from "../../assets/images/background.jpg"

export const Container = styled.div`
    height: vh;
    border: 1px solid red;

    .bg{
        background-image: url(${background});
        background-repeat: no-repeat;       
        background-position: center center;
        background-size: cover;
        min-height: 240px;  
        height: 100%;
             
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

    background-color: rgba(244, 67, 54, 0.5);

    h1{
        font-size: 3rem;
        width: 77%;
        font-weight: 400;
        color: rgb(255, 255, 255);
        text-align: center;
        margin-top: 40px;
    }

    p{
        font-size: 1.2rem;
        font-weight: 400;
        color: rgb(255, 255, 255);
        width: 87%;
        text-align: center;
        margin-top: 20px;
        line-height: 32px;
    }

    button{
        scroll-behavior: smooth;
        border-radius: 8px;
        border-width: 2px;
        border-style: solid;
        box-shadow: none;
        background-color: rgb(244, 67, 54);
        color: rgb(255, 255, 255);
        border-color: rgb(244, 67, 54);

        padding: 0.75rem 1rem;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.75rem;
        width: 70%;
        margin-top: 40px;

        cursor: pointer;
    }



   
`;

