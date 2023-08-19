import { useContext } from "react"
import { Container } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"

import fotopessoa from "../../assets/images/fotopessoa.png"


export const AboutMe = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal} id="aboutMe">
                <div className="titleImageBox">
                    <div className="titleBox">
                        <h1 className="title" >Quem</h1>
                        <p className="subTitle">sou eu</p>
                    </div>
                    <img src={fotopessoa} alt="foto de uma pessoa de pé"/>
                </div>

                <div className="description">
                    <p className="descriptionText">
                        Sou Suzana Beukhof, graduada em fisioterapia, 
                        e estou animada em compartilhar minha jornada de aprendizado com você. 
                        Minhas formações abrangem desde microfisioterapia e TFT para liberar emoções, 
                        até soul plan Reading para explorar a espiritualidade nas trajetórias de vida. 
                        com conhecimentos em leis biológicas e constelação Familiar, compreendo a ligação mente-corpo.
                        Além disso, explorei Hipnose, Psicogenealogia e Thetahealing para ajudar outros na cura emocional. 
                        Minhas habilidades em Cura de feridas pré e perinatais, 
                        auriculoacupuntura e apometria terapêutica complementam meu arsenal terapêutico, 
                        junto com a abordagem transpessoal do reiki. Juntos, 
                        vamos explorar maneiras de alcançar plenitude e transformação. 
                        Vamos começar essa jornada!
                    </p>

                </div>

           

            </Container>
        </>
    )
}