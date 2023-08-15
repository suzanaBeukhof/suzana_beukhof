import { styled } from "styled-components";
import regrecao_cover from "../../assets/images/regrecao_cover.jpg"

export const Container = styled.div`
    
    width: 100%;
    margin-top: 2px;
    background-image: url(${regrecao_cover});
    background-repeat: no-repeat;
    background-position: center;   
    background-size: cover;        
    height: 100%;


   
    

    .contentBox{        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: rgba(105,95,100,.46);
        
        
       
       

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
             margin-top: 2px;
             margin-bottom: 2px;
            

            .description{
                
            }

            .one{
                align-self: flex-start;
                margin-left: 10px;
            }
            .two{
                align-self: flex-end;
                margin-right: 10px;
            }

            .descriptionP{
                font-size: 1.3rem;
            }


        

       
        }

        

    }
    
    

    

`;

export const Content = styled.div`

     

    
    

        
    

    @media (min-width: 780px){
        width: 90%;
    }
   

   
`;

