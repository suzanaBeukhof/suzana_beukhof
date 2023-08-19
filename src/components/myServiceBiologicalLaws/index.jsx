import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const MyServiceBiologicalLaws = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal} id="biologicalLaws">
                <div className="contentBox">
                    <h1 className="title">O que é leis biológicas</h1> 
                    <p className="subTitle">As leis biológicas revelam a
                        sabedoria oculta por trás dos processos vitais, conectando-nos
                        profundamente com a natureza que nos molda.
                    </p> 
                </div> 
            </Container>
        </>
    )
}