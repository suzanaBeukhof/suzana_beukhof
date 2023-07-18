import { Container } from "./style"

import{FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"


export const Footer = () => {
    return(
        <>
            <Container>

                <h1 className="nameTitle">Douglas Braz</h1>
                <p className="homeP">Home</p>

                <ul className='menu'>
                        <li className="linkeIcon"><FaLinkedin size={25}/></li>
                        <li className="instaIcon"><FaInstagramSquare FaLinkedin size={25}/></li>
                        <li className="emailIcon"><MdEmail FaLinkedin size={25}/></li>
                </ul>


            </Container>
        </>
    )
}