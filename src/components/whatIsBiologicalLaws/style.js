import { styled } from "styled-components";
import leis_biologicas2 from "../../assets/images/leis_biologicas2.jpg"


export const Container = styled.div`
    
    width: 100%;    

    background-image: url(${leis_biologicas2});
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
    height: 100%;

    .contentBox{        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background: rgba(105,95,100,.66);

        .description{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80%;
            width: 70%;
            border-radius: 10px;
            background: #15243A;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .descriptionP{
            background: none;
            color: #ffffff;
            text-align: center;
        }
    }

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;   
        
        .contentBox{
            width: 100%;

            .descriptionP{
                font-size: 1.3rem;
            }
        }

    }

`;



