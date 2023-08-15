import { styled } from "styled-components";
import constalacao from "../../assets/images/constalacao.jpg"

export const Container = styled.div`
    height: 30vh;
    width: 100%;
    background-image: url(${constalacao});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* position: relative; */

    .contentBox{
        position: absolute;
        height: 30vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background: #090808;
        opacity: 80%;


        

        .title{
            font-size: 1.8rem;
            color: #ffffff;
            margin-top: 30px;
            background: none;
        }

        .subTitle{
            font-size: 1rem;
            color: #ffffff;
            margin-top: 30px;
            background: none;
            text-align: center;

        }
    }
    
   

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;   
        
        .contentBox{
            width: 90%;
            margin: 0 auto;   

        

        .title{
            font-size: 3rem;
        }

        .subTitle{
           font-size: 2rem;

        }
    }
    
    }

    

`;

export const Content = styled.div`

     

    
    

        
    

    @media (min-width: 780px){
        width: 90%;
    }
   

   
`;

