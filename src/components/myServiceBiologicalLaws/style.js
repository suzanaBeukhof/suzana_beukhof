import { styled } from "styled-components";
import leis_biologicas from "../../assets/images/leis_biologicas.png"

export const Container = styled.div`
    height: 30vh;
    width: 100%;
    margin-top: 2px;

    background-image: url(${leis_biologicas});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
   
    .contentBox{
        position: absolute;
        height: 30vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background: #090808;
        opacity: 90%;


        

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



