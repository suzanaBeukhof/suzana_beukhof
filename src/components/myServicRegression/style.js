import { styled } from "styled-components";
import microterapia from "../../assets/images/microterapia.jpg"

export const Container = styled.div`
    height: 30vh;
    width: 100%;
    background-image: url(${microterapia});
    background-repeat: no-repeat;
    background-size: 100%;
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
            font-size: 1.5rem;
            color: #ffffff;
            margin-top: 30px;
            background: none;
            text-align: center;
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
            font-size: 2.2rem;
        }

        .subTitle{
           font-size: 1.2rem;

        }
    }
    
    }

    

`;

