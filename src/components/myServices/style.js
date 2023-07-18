import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title{
        font-weight: 400;
        margin-top: 30px;
        margin-bottom: 30px;
        
    }

    


    background-color: rgba(244, 67, 54, 0.5);

    

`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    
    .box1, .box2, .box3{
        width: 18rem;
        height: 35rem;
        margin: 30px 30px 0 30px;
        

        

        img{
            width: 100%;
            height: 40%;

            object-fit: cover;
            object-position: center center;
        }

        .tittleParagraph{
            font-size: 1.5rem;
            margin-top: 30px;
        }

        .paragraph{
            font-size: large;
            margin-top: 30px;            
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
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.75rem;
        width: 12rem;
        margin-top: 40px;

        cursor: pointer;

        }

        
    }
   

   
`;

