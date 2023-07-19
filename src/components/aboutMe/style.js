import { styled } from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   height: 90vh;
   background-color: rgb(51, 51, 51);
    min-height: 240px;
    padding: 30px;

    div{
        align-items: flex-start;
        
       

        .tittle, .firstP, .secondP{
            font-weight: 400;
            margin-top: 20px;
            color: rgb(255, 255, 255);

        }

        

        
    }

    img{
       width: 100%;
       height: 40%;
       margin-top: 5%;

       object-fit: cover;
       object-position: center center;
    }

    @media (min-width: 780px){
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;

        height: 60vh;


        div{
            height: 39rem;
            width: 55rem; 
            padding-left: 30px ;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .tittle{
                font-size: 2.5rem;
            }

            .firstP, .secondP{
                font-size: 1.3rem;
            }
        }

        img{
            width: 45rem;
            height: 27rem;           
            margin-top: 0;
        }
    }

`;



