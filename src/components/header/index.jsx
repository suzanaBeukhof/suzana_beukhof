import { useContext } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu} from "react-icons/ai"

import logo from '../../assets/images/logo.png'



import { ButtonContext } from '../../providers/buttonProvider'


export const Header = () => {
   const {modal, openModal, closeModal} = useContext(ButtonContext)

   

    return(
        <>
            <Container  >
                <div className='logo_titleBox'>
                    <div className='titleBox'>
                        <img  className='logo' src={logo} alt='logo' />
                        <h1 className='title' >Suzana Beukhof</h1>
                    </div>
                    <p className='subTitle'>Práticas integrativas e complementares</p>
                    <AiOutlineMenu className='menuIcon' cursor="pointer" color="#15243A" size={25} onClick={openModal }/>

                </div>
                <Content>
                    <div className={modal} onClick={closeModal}>
                        

                        <ul className='menu'>
                            <li><a className='subTitle' href="#home">Home</a></li>
                            <li><a className='subTitle' href="#aboutMe">Sobre mim</a></li>
                            <li>O que eu trato</li>
                            <li><a className='subTitle' href="#contact">Contato</a></li>
                        </ul>                  
                       
                    </div>

                    <ul className='menuBox'>
                        <li><a className='subTitle' href="#home">Home</a></li>
                        <li><a className='subTitle' href="#aboutMe">Sobre mim</a></li>
                        <li>O que eu trato</li>
                        <li><a className='subTitle' href="#contact">Contato</a></li>
                    </ul>    
                                      
                </Content>
            </Container>
        </>
    )
}