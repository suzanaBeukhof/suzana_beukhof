import { useContext } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu} from "react-icons/ai"
import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { ButtonContext } from '../../providers/buttonProvider'


export const Header = () => {
   const {modal, openModal, closeModal} = useContext(ButtonContext)

   

    return(
        <>
            <Container >
                <h1 >Douglas Braz</h1>
                <AiOutlineMenu cursor="pointer" color="rgb(255, 255, 255)" size={25} onClick={openModal}/>
                <Content>
                    <div className={modal}>
                        

                        <ul className='menu'>
                            <li className="linkeIcon"><FaLinkedin cursor="pointer"/></li>
                            <li className="instaIcon"><FaInstagramSquare cursor="pointer"/></li>
                            <li className="emailIcon"><MdEmail cursor="pointer"/></li>

                        </ul>
                        <AiOutlineCloseCircle 
                            color="rgb(255, 255, 255)" 
                            size={25} 
                            className='close' 
                            onClick={closeModal}
                            cursor="pointer"
                        />
                       
                    </div>
                                      
                </Content>
            </Container>
        </>
    )
}