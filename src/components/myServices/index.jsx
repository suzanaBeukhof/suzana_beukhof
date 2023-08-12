import { Container, Content } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const MyServices = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <h1 className="title">Meus serviços</h1>

                <Content>
                    
                </Content>

                <div className="modal">
                    <p>
                        teste
                    </p>
                </div>

                
                
            </Container>
        </>
    )
}