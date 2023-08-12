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
        margin-top: 10px;

        img{
            width: 30%;
        }

        .titleBox{
            margin-top: 8%;
           

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

        .titleImageBox{
            .titleBox{
                .title{
                    font-size: 3rem;                    
                }
                .subTitle{
                    font-size: 2.5rem;
                }
            }
          

            img{
                width: 18rem;                    
                
            }
        }

        .description{
        font-size: 1.5rem;
        width: 100%;
        margin: 0 auto;

    }
    }

`;



