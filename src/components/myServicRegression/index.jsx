import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const MyServiceRegression = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                    <h1 className="title">
                        Regressão Pré e Perinatal:
                        Resgatando a Saúde Física e
                        Emocional desde o Início da Vida
                    </h1> 
                     <p className="subTitle">
                        Através da regressão pré e perinatal,
                        exploramos as raízes da saúde física
                        e emocional, desvendando a história
                        vital desde seus primeiros
                        momentos.
                    </p> 
                </div> 

                

                
                
            </Container>
        </>
    )
}