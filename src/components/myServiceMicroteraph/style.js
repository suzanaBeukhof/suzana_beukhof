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
        opacity: 94%;

        border: 1px solid red;

        

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
            
        }

        .subTitle{
           

        }
    }
    
    }

    

`;

export const Content = styled.div`

     

    
    

        
    

    @media (min-width: 780px){
        width: 90%;
    }
   

   
`;

