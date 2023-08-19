import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const MyServiceFamilyConstellation = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal} id="familyConstellation">
                <div className="contentBox">
                     <h1 className="title">O que é constalação familiar</h1> 
                     <p className="subTitle">Nas constelações familiares,
                        olhamos para além das aparências,
                        desvendando os laços invisíveis que
                        moldam nosso destino.
                    </p> 
                </div> 

                

                
                
            </Container>
        </>
    )
}