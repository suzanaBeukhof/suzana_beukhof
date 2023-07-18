import { useState } from 'react'
import { Container, Content } from "./style"

import {AiOutlineMenu} from "react-icons/ai"
import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiOutlineCloseCircle} from "react-icons/ai"


export const Header = () => {
    const [modal, setModal] = useState('modal')

    function openModal() {
        setModal('modalOpen')
        console.log('abriu')
        console.log(modal)
    }

    function closeModal() {
        setModal('modal')
        console.log('fechou')
        console.log(modal)
    }

    

    return(
        <>
            <Container>
                <h1>Douglas Braz</h1>
                <AiOutlineMenu color="rgb(255, 255, 255)" size={25} onClick={openModal}/>
                <Content>
                    <div className={modal}>
                        

                        <ul className='menu'>
                            <li className="linkeIcon"><FaLinkedin/></li>
                            <li className="instaIcon"><FaInstagramSquare/></li>
                            <li className="emailIcon"><MdEmail/></li>

                        </ul>
                        <AiOutlineCloseCircle 
                            color="rgb(255, 255, 255)" 
                            size={25} 
                            className='close' 
                            onClick={closeModal}
                        />
                       
                    </div>
                                      
                </Content>
            </Container>
        </>
    )
}