import { styled } from "styled-components";


export const Container = styled.div`
    
    width: 100%;
    margin-top: 2px;

    .contentBox{        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background: rgba(105,95,100,.26);

        .description{
            display: flex;
            flex-direction: column;
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

        .title{
            background: none;
            color: #ffffff;
            text-align: center;
            margin-bottom: 15px;
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

