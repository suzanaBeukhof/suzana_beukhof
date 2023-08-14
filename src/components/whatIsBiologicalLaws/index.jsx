import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const WhatIsBiologicalLaws = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
            <div className="contentBox">
                        <div className="description">
                            <p className="descriptionP">É uma técnica terapêutica que busca entender e
                                tratar as doenças a partir da interpretação dos
                                sintomas como uma resposta adaptativa do
                                corpo a situações de estresse ou conflito
                                emocional.
                                Essa abordagem se baseia na teoria da Nova
                                Medicina Germânica, desenvolvida pelo médico
                                alemão Ryke Geerd Hamer, que propõe que as
                                doenças são uma resposta biológica do
                                organismo a eventos estressantes ou
                                traumáticos, e que o sintoma é uma forma
                                inteligente de o corpo lidar com essas situações.
                                Nas Leis Biológica, o terapeuta busca identificar a
                                origem do conflito emocional que gerou cada
                                doença, a partir da análise dos sintomas e do
                                histórico do paciente, e então trabalha no sentido
                                de promover a compreensão e a liberação
                                dessas emoções, com o objetivo de permitir o
                                restabelecimento natural do organismoA Leitura
                                Biológica não se limita apenas à análise dos
                                sintomas físicos, mas também leva em conta
                                aspectos emocionais, comportamentais e sociais
                                do paciente, buscando uma compreensão mais
                                completa da origem do conflito e uma
                                abordagem terapêutica mais ampla e integrada.

                            </p>
                        </div>
                    </div> 
            </Container>
        </>
    )
}