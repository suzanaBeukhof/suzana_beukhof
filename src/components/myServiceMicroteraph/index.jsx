import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const MyServicesMicroteraph = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                     <h1 className="title">O que é Microterapia</h1> 
                     <p className="subTitle">"Grandes transformações através de pequenos insights:
                     essa é a essência da microterapia.”
                    </p> 
                </div> 

                

                
                
            </Container>
        </>
    )
}