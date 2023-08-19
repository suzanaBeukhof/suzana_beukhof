import { styled } from "styled-components";

export const Container = styled.div`
   

    .contentBox{
        
        
        .supBox{
            
            background: #004aad;
           
        }

        .firstBox{
            padding: 10px;
            
            .paragraph{
                text-align: center;
                color: #ffffff;
            }    
        }

        .secondBox{
            .numberBox{
                display: flex;
                align-items: center;
                justify-content: center;                

                width: 40%;
                height: 3rem;
                border-top-right-radius: 50px;
                border-bottom-right-radius: 50px;
                background: #ffffff;
                .number{
                    font-size: 2rem;
                    font-weight: bolder;
                    color: #15243A;
                    opacity: 80%;
                }
            }

            .textBox{
                padding: 10px;
                .paragraph{
                    text-align: center;
                    color: #ffffff;
                }  
            }
        }

        .thirdBox{
            display: flex;
            flex-direction: column;           
            align-items: flex-end;
            .numberBox{
                display: flex;
                align-items: center;
                justify-content: center;                

                width: 40%;
                height: 3rem;
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
                background: #ffffff;
                .number{
                    font-size: 2rem;
                    font-weight: bolder;
                    color: #15243A;
                    opacity: 80%;
                }
            }

            .textBox{
                padding: 10px;
                
                .paragraph{
                    text-align: center;
                    color: #ffffff;
                }  
            }
        }

       

        .infBox{
            margin-top: 20px;

            .fourthBox{
                .numberBox{
                    display: flex;
                    align-items: center;
                    justify-content: center;                

                    width: 40%;
                    height: 3rem;
                    border-top-right-radius: 50px;
                    border-bottom-right-radius: 50px;
                    background: #004aad;
                    .number{
                        font-size: 2rem;
                        font-weight: bolder;
                        color: #ffffff;                        
                    }
                }
            }

            .textBox{
                padding: 10px;
                .paragraph{
                    text-align: center;
                    color: #15243A;
                }  
            }
        }

        .fifthBox{
            padding: 10px;
                .paragraph{
                    text-align: center;
                    color: #15243A;
                } 
        }

    }

    

    @media (min-width: 780px){        
        width: 90%;
        margin: 0 auto;  
        
        
        .contentBox{
            .firstBox{  
                margin-bottom: 20px;          
                
                .paragraph{
                    font-size: 1.3rem;
                }    
            }

            .secondBox{
                display: flex;
                margin-bottom: 20px;
                .numberBox{
                    width: 555px;
                    height: 8rem;
                   
                    .number{
                        font-size: 5rem;
                    }
                }

                .textBox{
                   
                    .paragraph{
                        font-size: 1.3rem;
                    }  
                }
            }

            .thirdBox{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row-reverse;
                height: 10rem;
                margin-bottom: 20px;

                .numberBox{
                    width: 555px;
                    height: 8rem;
                   
                    .number{
                        font-size: 5rem;
                    }
                }

                .textBox{
                   
                    .paragraph{
                        font-size: 1.3rem;
                    }  
                }
            }

        

            .infBox{
               

                .fourthBox{
                    display: flex;
                    .numberBox{
                        width: 555px;
                        height: 8rem;
                    
                        .number{
                            font-size: 5rem;
                        }
                    }

                    .textBox{
                    
                        .paragraph{
                            font-size: 1.3rem;
                        }  
                    }
                }
            }    

            .fifthBox{
                margin-top: 2rem;
                margin-bottom: 20px;
                .paragraph{
                    font-size: 1.3rem;   
                } 
            }

        }
    }

`;

