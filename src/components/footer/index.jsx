import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"

import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {FaGithub} from "react-icons/fa"


export const Footer = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal}>

                <h1 className="nameTitle">Douglas Braz</h1>
                <p className="homeP">Home</p>

                <ul className='menu'>
                        <li className="linkeIcon"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dougbatista"><FaLinkedin size={25}/></a></li>
                        <li className="instaIcon"><a target="_blank" rel="noreferrer" href="https://instagram.com/doug.developer?igshid=ZDc4ODBmNjlmNQ=="><FaInstagramSquare FaLinkedin size={25}/></a></li>
                        <li className="emailIcon"><a target="_blank" rel="noreferrer" href="douglasbraz.dev@gmail.com"><MdEmail FaLinkedin size={25}/></a></li>
                        <li className="gitIcon"><a target="_blank" rel="noreferrer" href="https://github.com/ltkbigdad"><FaGithub size={25}/></a></li>
                </ul>


            </Container>
        </>
    )
}