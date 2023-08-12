import { useContext } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu} from "react-icons/ai"
import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import logo from '../../assets/images/logo.png'

import {FaGithub} from "react-icons/fa"

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
                            <li className="linkeIcon">Home</li>
                            <li className="instaIcon">Sobre mim</li>
                            <li className="emailIcon">O que eu trato</li>
                            <li className="gitIcon">Contato</li>
                        </ul>                  
                       
                    </div>

                    <ul className='menuBox'>
                        <li ><p>Home</p></li>
                        <li >Sobre mim</li>
                        <li >O que eu trato</li>
                        <li >Contato</li>
                    </ul>    
                                      
                </Content>
            </Container>
        </>
    )
}