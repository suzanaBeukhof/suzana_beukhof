import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
   
    

    .logo_titleBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .subTitle{
            color: #15243A;
            font-size: 1rem;

        }

        .menuIcon{
            align-self: flex-start;
            margin-top: 10px;
            margin-left: 10px; 
            margin-bottom: 10px;
            
        }
        
    }

    .titleBox{
        display: flex;        
        align-items: baseline;
        justify-content: center;
        width: 100%;

        .title{

            color: #15243A;
            font-size: 1.9rem;
            font-family: 'Arvo', serif;
            font-weight: 400;
           
        }

        .logo{
            width: 23%;

        }


        
    }

    

    @media (min-width: 780px){
        width: 90%;
        margin: 0 auto;

        .menuIcon{
            display: none;
        }

        .logo_titleBox{

            .subTitle{          
                font-size: 2rem;
                :hover{
                    border-top: 1px solid #15243A;
                    border-bottom: 1px solid #15243A;

                }
            }
        }

        .titleBox{
            align-items: baseline;

            .title{
            font-size: 5rem;           
            }  

            .logo{
                width: 10%;

            }
        }

        


    }
`;

export const Content = styled.div`    
    align-self: flex-start;
    margin-left: 10px; 
   

    .modal{
        display: none;        
    }

    .modalOpen{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 20px;
        padding-bottom: 10px;

        li{
        font-size: 1rem;
        color: #15243A;
        font-family: 'Arvo', serif; 
        cursor: pointer;
        }

        li:hover{                
            border-top: 1px solid #15243A;
            border-bottom: 1px solid #15243A;
        }

        li{
            margin-top: 10px;
            margin-bottom: 10px;

            .icon{
                color: red;
            }
        }

        a{
            color: #15243A; 
            cursor: pointer;
        }

        .treatmentsBoxMobile{
            display: none;
        }

        .treatmentsBoxMobileOpen{
            
            width: 13rem;
            margin-left: 113px;
            margin-top: 81px;
            position: absolute;
            /* background-color: rgba(255, 255, 255, .99); */
            z-index: 10;
            li{
                font-size: 1rem;
                color: #15243A;
                font-family: 'Arvo', serif; 
                cursor: pointer;
            }

            li:hover{                
                border-top: 1px solid #15243A;
                border-bottom: 1px solid #15243A;
            }

            li{
                margin-top: 10px;
                margin-bottom: 10px;
            }

            a{
                color: #15243A; 
                cursor: pointer;
            }
        }
    }

    .treatmentsBox{
        display: none;
    }

    

    .menuBox{
        display: none;
    }

    @media (min-width: 780px){
        width: 100%;
        margin: 0 auto;

        .modalOpen{
            display: none;
        }
        .treatmentsBoxMobileOpen{
            display: none;
        }
        
        .menuBox{
            display: flex;
            justify-content: space-evenly;
            margin-top: 30px;
            margin-bottom: 30px;
            width: 100%;

            li{
                cursor: pointer;
                border-top: 1px solid #ffffff;
                border-bottom: 1px solid #ffffff;
            }
            li:hover{                
                border-top: 1px solid #15243A;
                border-bottom: 1px solid #15243A;
            }

            a{
                color: #15243A; 
                cursor: pointer;
            }
            
        }

        .treatmentsBoxOpen{
        
            width: 13rem;
            position: absolute;
            /* background-color: rgba(255, 255, 255, .99); */
            z-index: 10;
            li{
                font-size: 1rem;
                color: #15243A;
                font-family: 'Arvo', serif; 
                cursor: pointer;
            }

            li:hover{                
                border-top: 1px solid #15243A;
                border-bottom: 1px solid #15243A;
            }

            li{
                margin-top: 10px;
                margin-bottom: 10px;
            }

            a{
                color: #15243A; 
                cursor: pointer;
            }
        }


        
        
    }

   
`;

