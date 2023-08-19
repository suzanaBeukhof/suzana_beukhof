import { useContext } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu, AiOutlineDown} from "react-icons/ai"

import logo from '../../assets/images/logo.png'



import { ButtonContext } from '../../providers/buttonProvider'


export const Header = () => {
   const {modal, openModal, subMenuMobile, subMenu, openSubMobile, openSub} = useContext(ButtonContext)

   

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
                    <div className={modal} >                        

                        <ul className='menu'>
                            <li><a className='subTitle' href="#home">Home</a></li>
                            <li><a className='subTitle' href="#aboutMe">Sobre mim</a></li>
                            <li className='subTitle' onClick={openSubMobile}>O que eu trato <AiOutlineDown/> </li>
                            <li><a className='subTitle' href="#contact">Contato</a></li>
                        </ul> 

                        <ul className={subMenuMobile}>
                            <li><a className='subTitle' href="#microtherapy">Microterapia</a></li>
                            <li><a className='subTitle' href="#biologicalLaws">Leis Biológicas</a></li>
                            <li><a className='subTitle' href="#familyConstellation">Constalação Familiar</a></li>
                            <li><a className='subTitle' href="#regression">Regreção Pré e Perinatal</a></li>                        
                        </ul>          
                       
                    </div>

                    <ul className='menuBox'>
                        <li><a className='subTitle' href="#home">Home</a></li>
                        <li><a className='subTitle' href="#aboutMe">Sobre mim</a></li>
                        <li className='subTitle' onClick={openSub}>O que eu trato <AiOutlineDown className='icon'/> 
                            <ul className={subMenu}>
                                <li><a className='subTitle' href="#microtherapy">Microterapia</a></li>
                                <li><a className='subTitle' href="#biologicalLaws">Leis Biológicas</a></li>
                                <li><a className='subTitle' href="#familyConstellation">Constalação Familiar</a></li>
                                <li><a className='subTitle' href="#regression">Regreção Pré e Perinatal</a></li>
                            </ul>   
                        </li>                            
                        <li><a className='subTitle' href="#contact">Contato</a></li>
                    </ul>

                         
                                      
                </Content>
            </Container>
        </>
    )
}