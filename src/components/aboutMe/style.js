import { styled } from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;   
   background-color: #ffffff;
   
   

    .titleImageBox{
        display: flex;

        justify-content: space-between;
        width: 100%;
       

        img{
            margin-top: 20px;
            width: 50%;
            align-self: center;
        }

        .titleBox{
                     

            .title{
                font-size: 2rem;
                padding-left: 20px;
                padding-right: 5px;
                color: #ffffff;
                border: 1px solid #15243A;
                background: #15243A;
            }

            .subTitle{
                font-size: 1.5rem;
                font-weight: 800;
                margin-left: 20px;
                color: #15243A;                
            }
            
        }

        
    }

    .description{
        font-size: 1rem;
        color: #15243A;
        padding: 20px;
        text-align: left;

    }

    @media (min-width: 780px){
        width: 90%;
         margin: 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        

        .titleImageBox{
            width: 50%;
            
            flex-direction: column;
            justify-content: space-around;

          
            .titleBox{
                margin-top: 0px;
                .title{
                    font-size: 3rem; 
                    width:  25rem;
                }
                .subTitle{
                    font-size: 2.5rem;
                }
            }
          

            img{
                width: 25rem;
                
            }
        }

        .description{
            display: flex;
            align-items: center;
            font-size: 1.1rem;            
            width: 40%;
           
            margin: 0 auto;
        }
    }

    @media (min-width: 1118px){

        .titleImageBox{
            width: 28%;
        }
        
        .description{            
            font-size: 1.5rem;  
            width: 50%;            
        }
        
    }

`;



