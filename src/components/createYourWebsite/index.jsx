import { useContext } from "react"
import { Container, Content } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"


export const CreateYourWebsite = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal}>
                <div className="bg">
                <Content>
                    <h1>Crie seu site hoje!</h1>
                    <p>Desenvolvimento web profissional para impulsionar seu negócio.
                         Transforme sua presença online.</p>

                    <button>Comece agora</button>     
                </Content>
                </div>
                
                

            </Container>
           
        </>
    )
}