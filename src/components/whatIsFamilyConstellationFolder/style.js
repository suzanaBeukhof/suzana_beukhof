import { styled } from "styled-components";

export const Container = styled.div`
   

    .contentBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        margin-top: 10px;
        .tittle{
            font-size: 1.5rem;
            text-align: center;
        }
        .tittleSpan{
            color: #145369;
        }
        
        
        .cardsBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .par, .impar{
                display: flex;
                align-items: center;
                justify-content: flex-end;

                background: rgba(255, 255, 255, 0.17);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5.7px);
                -webkit-backdrop-filter: blur(5.7px);
                border: 1px solid rgba(255, 255, 255, 0.62);
                

                margin-top: 5px;
                margin-bottom: 5px;
                padding: 10px;
                border-radius: 10px;

                cursor: pointer;

                .tittleBox{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    

                    width: 83%;

                    .paragraphTittle{
                        width: 70%;
                        font-size: 1rem;
                        font-weight: bolder;

                    }                    
                }               

                .numberBox{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: flex-start;
                    border-radius: 50%;
                    width: 85px;
                    height: 85px;
                    background: #145369;
                    .numberTittle{
                        font-size: 1.2rem;
                        font-weight: bolder;
                        color: #ffffff;
                    }
                }
            }

            .impar{
                
                .tittleBox{
                    align-items: end;
                    margin-right: 5px;
                   
                    .paragraphTittle{
                        text-align: right;
                        width: 100%;
                    }

                    .description{
                        text-align: right;
                    }                    
                }
            }

            .par{
                flex-direction: row-reverse;                

                align-items: start;
                   
                .paragraphTittle{
                    text-align: left;
                    width: 100%;
                }

                .description{
                    text-align: left;
                }                
            }
        }

        .modal{
            height: 100%;
            width: 100%;
            position: absolute;

            display: flex;
            justify-content: center;
            align-items: center;
            
            background: rgba(255, 255, 255, 0.17);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.7px);
            -webkit-backdrop-filter: blur(5.7px);
            border: 1px solid rgba(255, 255, 255, 0.62);

            .modal-content{
                
                width: 95%;
                padding: 10px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;

                background: #ffffff;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

                .titleModal{
                    text-align: center;                    
                    font-size: 1rem;
                    color: #145369;
                    margin-bottom: 10px;
                    
                }

                .descriptionModal{
                   text-align: center;
                   font-size: 1rem; 
                   margin-top: 10px;
                }

                button{
                    width: 8rem;
                    height: 2rem;
                    background: none;
                    border: 1px solid #145369;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-top: 25px;

                    -webkit-box-shadow: 4px 5px 15px 1px rgba(0,0,0,0.49); 
                    box-shadow: 4px 5px 15px 1px rgba(0,0,0,0.49);

                    
                }
            }
        }        

    }   

    

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;  

        border: 1px solid;        
        
        .contentBox{
            
            .cardsBox{

                .par, .impar{
                    width: 33rem;

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
                        font-size: 1.3rem;
                    }
                }
                .impar{
                    margin-right: 40%;
                    
                }

                .par{
                    margin-left: 40%;
                }
            }

            .modal-content{
                .titleModal{                                      
                    font-size: 2rem;    
                }

                .descriptionModal{                  
                   font-size: 1.1rem;                   
                }
            }
        }   
    }

`;

