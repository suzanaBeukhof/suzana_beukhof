import { useContext } from "react"
import { Container } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"

import fotopessoa from "../../assets/images/fotopessoa.png"


export const AboutMe = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal}>
                <div className="titleImageBox">
                    <div className="titleBox">
                        <h1 className="title">Quem</h1>
                        <p className="subTitle">sou eu</p>
                    </div>
                    <img src={fotopessoa} alt="foto de uma pessoa de pé"/>
                </div>

                <p className="description">
                    Sou Suzana Beukhof, graduada em Fisioterapia, 
                    e estou animada em compartilhar minha jornada de aprendizado com você. 
                    Minhas formações abrangem desde Microfisioterapia e TFT para liberar emoções, 
                    até Soul Plan Reading para explorar a espiritualidade nas trajetórias de vida. 
                    Com conhecimentos em Leis Biológicas e Constelação Familiar, compreendo a ligação mente-corpo.
                    Além disso, explorei Hipnose, Psicogenealogia e Thetahealing para ajudar outros na cura emocional. 
                    Minhas habilidades em Cura de Feridas Pré e Perinatais, 
                    Auriculoacupuntura e Apometria Terapêutica complementam meu arsenal terapêutico, 
                    junto com a abordagem transpessoal do Reiki. Juntos, 
                    vamos explorar maneiras de alcançar plenitude e transformação. 
                    Vamos começar essa jornada!
                </p>
           

            </Container>
        </>
    )
}