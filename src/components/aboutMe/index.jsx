import { useContext } from "react"

import { Container } from "./style"
import about from "../../assets/images/about.jpg"

import { ButtonContext } from "../../providers/buttonProvider"


export const AboutMe = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal}>
                <div>
                    <h1 className="tittle">Sobre mim</h1>
                    <p className="firstP">Sou Douglas Braz desenvolvedor web front-end. 
                        Tenho como objetivo oferecer soluções criativas e eficientes para meus clientes, 
                        sempre buscando atender às suas necessidades de forma personalizada.                
                    </p>
                    <p className="secondP">
                    Sou um profissional altamente capacitado e 
                        que estou sempre atualizado com as últimas tendências do mercado. 
                        Combino tecnologia e criatividade para entregar projetos de alta qualidade,
                        que superam as expectativas de meus clientes.
                    </p>
                </div>
            <img src={about}/>

            </Container>
        </>
    )
}