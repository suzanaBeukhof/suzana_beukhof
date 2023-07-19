import { styled } from "styled-components";

export const Container = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* height: 100vh; */
    padding: 20px;


    background-color: rgb(20, 142, 224); 

    .tittle{
        font-weight: 400;
        margin-top: 30px;
        margin-left: 30px;
       
        
    }

    .paragraph{
        margin-top: 30px;
        margin-left: 30px;
    }

    .boxForm{
        width: 100%;
    }

    .form{
        width: 100%;
        margin-top: 30px;
        height: 55rem;
        border: none;
    }

    @media (min-width: 780px){
        flex-direction: row;
        align-items: center;

        .boxTxt{
            width: 50rem;
        }

        .boxForm{
            width: 53rem;
        }

        .form{
            height: 50rem;
        }

        .tittle{
            font-size: 4rem;
        }

        .paragraph{
            font-size: 2rem;
        }
    }

    

`;


