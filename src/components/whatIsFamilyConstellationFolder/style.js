import { styled } from "styled-components";

export const Container = styled.div`
   

    .contentBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
        .tittle{
            font-size: 1.5rem;
            text-align: center;
            


        }
        .tittleSpan{
            color: #145369;
        }
        
        
        .cardsBox{

            .card{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                margin-top: 5px;
                margin-bottom: 5px;
                padding: 10px;
                border-radius: 10px;

                cursor: pointer;


                border: 1px solid;

                .tittleBox{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    width: 100%;
                    height: 80px;

                    border: 1px solid blue;
                    .paragraphTittle{
                        width: 70%;
                        font-size: 1rem;
                        font-weight: bolder;
                    }
                    .numberBox{
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        border-radius: 30px;
                        width: 45px;
                        height: 45px;
                        background: #145369;
                        .numberTittle{
                            font-size: 1.2rem;
                            font-weight: bolder;
                            color: #ffffff;
                        }
                    }
                }
                .description{}
            }
        }

        

    }   

    

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;  
        
        
        .contentBox{
            
            .tittle{
               
            }
            .tittleSpan{
               
            }
            
            
            .cardsBox{

                .card{
                    width: 45rem;


                    .tittleBox{
                        height: 8rem;
                       
                        .paragraphTittle{
                            font-size: 1.3rem;
                        }
                        .numberBox{
                            width: 75px;
                            height: 75px;
                            border-radius: 50%;
                           
                            .numberTittle{
                                font-size: 1.5rem;
                               
                            }
                        }
                    }
                    .description{
                        width: 50%;
                        font-size: 1.3rem;
                        align-self: flex-start;

                    }
                }
            }
        }   
    }

`;

