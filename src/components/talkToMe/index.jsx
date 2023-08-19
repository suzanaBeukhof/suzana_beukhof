import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"
import logo2 from '../../assets/images/logo2.png'
import { AiOutlineDown} from "react-icons/ai"

import { Container } from "./style"


export const TalkToMe = () => {
    const {closeModal, subMenuFooter, openSubFooter} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal} id="contact">
                <div className="logoBox">
                    <img  className='logo' src={logo2} alt='logo' />
                    <p className="title">Suzana Beukhof</p>
                    <p className='subTitle'>Práticas integrativas e complementares</p>
                </div>

                <div className="contact">
                    <p className="title">Contatos</p>
                    <p className='subTitle'>
                        R. dos Lírios, 63 - A - St. Res. Sul, Sinop - MT, 78550-007
                    </p>
                    <p >
                        <a className='subTitle' href="tel:+556699222422">
                            (66) 9922-2422
                        </a>
                    </p>
                    <p >
                        <a className='subTitle' href="https://www.instagram.com/suzanabeukhof/" target="blank">
                            https://www.instagram.com/suzanabeukhof/
                        </a>
                    </p>
                    
                </div>

                <div className="siteMap">
                    <p className="title">Mapa do site</p>
                    <p ><a className='subTitle' href="#home">Home</a></p>
                    <p ><a className='subTitle' href="#aboutMe">Sobre mim</a></p>
                    <p className='subTitleMenu' onClick={openSubFooter}>O que eu trato  
                            <ul className={subMenuFooter}>
                                <li><a className='subTitle' href="#microtherapy">Microterapia</a></li>
                                <li><a className='subTitle' href="#biologicalLaws">Leis Biológicas</a></li>
                                <li><a className='subTitle' href="#familyConstellation">Constalação Familiar</a></li>
                                <li><a className='subTitle' href="#regression">Regreção Pré e Perinatal</a></li>
                            </ul>   
                        </p> 
                    <p ><a className='subTitle' href="#contact">Contato</a></p>
                   
                </div>
                
            </Container>
        </>
    )
}