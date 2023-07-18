import { styled } from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   height: 85vh;
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

`;

export const Content = styled.div`
    
    
   

   
`;

