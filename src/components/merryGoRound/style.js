import { styled } from "styled-components";


export const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
   background: #d1c3a9;
    

    .slider{
        margin: 0 auto;
        width: 800px;
        height: 400px;
        overflow: hidden;
        background: #d1c3a9;
        border: 1px solid red;
    }

    .sliders{
        width: 400px;
        height: 400px;
        display: flex;
    }

    .sliders input{
        display: none;
    }

    .slide{
        border: 1px solid;
        width: 25%;
        position: relative;
    }

    .slide img{
        width: 285px;
    }

    .manual-navigation{
        position: absolute;
        width: 800px;
        margin-top: -40px;
        display: flex;
        justify-content: center;
        
    }

    .manual-btn{
        border: 2px solid red;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
    }

    .manual-btn:not(:last-child){
        margin-right: 40px;
    }

    .manual-btn:hover{
        background-color: #fff;
    }

    #radio1:checked ~ .first{
        margin-left: 0;
    }
    #radio2:checked ~ .first{
        margin-left: -25%;
    }
    #radio3:checked ~ .first{
        margin-left: -50%;
    }
    #radio4:checked ~ .first{
        margin-left: -75%;
    }

    .navigation-auto div{
        border: 2px solid #20a6ff;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
    }

    .navigation-auto{
        position: absolute;
        width: 800px;
        margin-top: 360px;
        display: flex;
        justify-content: center;
    }

    .navigation-auto div:not(:last-child){
        margin-right: 40px;
    }

    #radio1:checked ~ .navigation-auto .auto-btn1{
        background-color: #fff;
    }
    #radio2:checked ~ .navigation-auto .auto-btn2{
        background-color: #fff;
    }
    #radio3:checked ~ .navigation-auto .auto-btn3{
        background-color: #fff;
    }
    #radio4:checked ~ .navigation-auto .auto-btn4{
        background-color: #fff;
    }






    /* img{
        width: 18rem;
        margin-top: 30px;
    }

    h1{
        font-size: 2rem;
        width: 77%;
        font-weight: 400;
        color: #15243A;
        text-align: center;
        margin-top: 40px;
        background-color: #AD9466;
    }

    p{
        font-size: 1.2rem;
        font-weight: 400;
        color:#15243A;
        width: 87%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 32px;
        background-color: #AD9466; 
    }*/

    @media (min-width: 780px){
        width: 90%;
        margin: 0 auto;
    }
    
    
`;

export const Content = styled.div`
    



    @media (min-width: 780px){
        h1{
            font-size: 4.5rem;
            margin-top: 60px;
        }

        p{
            font-size: 1.5rem;
            width: 48rem;
            margin-top: 30px;
        }

        button{
            width: 12rem;
            margin-top: 70px;
        }
    }



   
`;

