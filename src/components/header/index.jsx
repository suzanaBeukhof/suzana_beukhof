import { useContext } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu} from "react-icons/ai"
import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"

import { ButtonContext } from '../../providers/buttonProvider'


export const Header = () => {
   const {modal, openModal, closeModal} = useContext(ButtonContext)

   

    return(
        <>
            <Container  >
                <h1 >Douglas Braz</h1>
                <AiOutlineMenu className='menuIcon' cursor="pointer" color="rgb(255, 255, 255)" size={25} onClick={openModal}/>
                <Content>
                    <div className={modal} onClick={closeModal}>
                        

                        <ul className='menu'>
                        <li className="linkeIcon"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dougbatista"><FaLinkedin size={25}/></a></li>
                        <li className="instaIcon"><a target="_blank" rel="noreferrer" href="https://instagram.com/doug.developer?igshid=ZDc4ODBmNjlmNQ=="><FaInstagramSquare FaLinkedin size={25}/></a></li>
                        <li className="emailIcon"><a target="_blank" rel="noreferrer" href="douglasbraz.dev@gmail.com"><MdEmail FaLinkedin size={25}/></a></li>
                        <li className="gitIcon"><a target="_blank" rel="noreferrer" href="https://github.com/ltkbigdad"><FaGithub size={25}/></a></li>

                        </ul>
                        {/* <AiOutlineCloseCircle 
                            color="rgb(255, 255, 255)" 
                            size={25} 
                            className='close' 
                            onClick={closeModal}
                            cursor="pointer"
                        /> */}
                       
                    </div>
                                      
                </Content>
            </Container>
        </>
    )
}