import { styled } from "styled-components";
import microterapia from "../../assets/images/microterapia.jpg"


export const Container = styled.div`
    
    width: 100%;
    margin-top: 2px;
    background-image: url(${microterapia});
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
    height: 100%;



    .contentBox{
        width: 100%;

        img{
                width: 100%;
                height: 100%;
            }

        

       
        }

    

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;   
        
        .contentBox{
            width: 100%;
           

        

       
        }

        

    }
    
    

    

`;

