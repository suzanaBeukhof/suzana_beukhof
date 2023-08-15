import { styled } from "styled-components";

export const Container = styled.div` 
    margin-bottom: 30px;
    
   
   background: #d1c3a9;
   


    .logoBox{
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;

        .logo{
            width: 10rem;
        }
        .title{
            font-weight: 400;  
            font-size: 2rem;
            color: #15243A; 
            background: none;
        }
        .subTitle{
            background: none;
            color: #15243A; 
            font-size: 1rem;
        }
    }

    .contact{
        background: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 5px;
        
        .title{
            font-weight: 400;  
            font-size: 2rem;
            color: #15243A; 
            background: none;
            align-self: center;

            
        }
        .subTitle{
            background: none;
            color: #15243A; 
            font-size: 0.9rem;
            align-self: flex-start;
            cursor: pointer;
            
        }
        p{
            background: none;
            margin-top: 5px;

        }
    }

    .siteMap{
        background: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 5px;
        
        .title{
            font-weight: 400;  
            font-size: 2rem;
            color: #15243A; 
            background: none;
            align-self: center;

            
        }
        .subTitle{
            background: none;
            color: #15243A; 
            font-size: 0.9rem;
            align-self: flex-start;
            cursor: pointer;
            
        }
        p{
            background: none;
            margin-top: 5px;

        }
    }

   

    

    @media (min-width: 780px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        
    }

    

`;


