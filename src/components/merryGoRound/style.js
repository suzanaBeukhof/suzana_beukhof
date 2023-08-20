import { styled } from "styled-components";


export const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d1c3a9;

    .sliderContainer{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-button-next{
        color: #15243A;
        
    }
    .swiper-button-prev{
        color: #15243A;
    }

    .sliderContent{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        width: 90%;
        height: 95%;
    }

    .card{
        width: 100%;
        height: 100%;
        background: #ffffff;

        img{
            width: 100%;
            height: 100%;
            opacity: 30%;
        }

        .description{
            position: absolute;
            margin-top: -250px;
            text-align: center;
            padding: 15px;
        }

        .title{
            font-size: 2rem;
            font-weight: 400;
            color: #15243A;
        }

        .paragraph{
            font-size: 1.2rem;
            font-weight: 400;
            color: #15243A;
        }

    }
    

 
    

    

    @media (min-width: 780px){
        width: 90%;
        margin: 0 auto;

        .sliderContainer{            
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sliderContent{
            width: 50%;           
        }

       
    }
    
    
`;



