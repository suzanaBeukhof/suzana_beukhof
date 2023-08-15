import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const WhatIsFamilyConstellationcont = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
            <div className="contentBox">
                        <div className="description">
                            <h2 className="title">
                                "O que você não resolve em sua mente, o seu
                                corpo converte em enfermidade".
                                Christian D. Larson
                            </h2>
                            <p className="descriptionP">                            
                                Constelação Familiar é uma técnica terapêutica
                                desenvolvida pelo alemão Bert Hellinger, que
                                busca trazer à luz padrões ocultos de
                                relacionamento e comportamento que afetam
                                negativamente as dinâmicas familiares e
                                pessoais.
                                Através da constelação familiar, a pessoa é
                                convidada a representar visualmente as relações
                                com seus familiares e/ou outras pessoas
                                significativas em sua vida. Essa representação
                                pode ser feita através de bonecos ou
                                simplesmente com a imaginação. O terapeuta
                                trabalha para identificar padrões disfuncionais e
                                encontrar formas de resolvê-los.
                                A técnica se baseia na ideia de que as dinâmicas
                                familiares muitas vezes são passadas de
                                geração em geração e que é possível liberar
                                esses padrões (presentes no inconsciente
                                familiar) e encontrar soluções para conflitos,
                                traumas e outros problemas pessoais através da
                                compreensão das relações familiares e do papel
                                de cada membro da família.
                            </p>
                        </div>
                    </div> 
            </Container>
        </>
    )
}