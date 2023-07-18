import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"

import { Container } from "./style"


export const TalkToMe = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal}>
            <h1 className="tittle">Fale comigo</h1>
                
                <p className="paragraph">Entre em contato através do formulário abaixo. Estou ansioso para ouvir você e ajudá-lo com suas necessidades de desenvolvimento web</p>

                <iframe  className="form" src="https://docs.google.com/forms/d/e/1FAIpQLSezb5tIS9P77ww-4hDdRLiyU1SJKlddSA73-KbBTDI8LL5KBQ/viewform?embedded=true" 
                ></iframe>
                
                

                

            </Container>
        </>
    )
}