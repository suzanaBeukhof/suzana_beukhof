import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const WhatIsMicrotherapy = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <div className="bgImage">
                    <div className="contentBox">
                        <div className="description one">
                            <p className="descriptionP">Microfisioterapia é uma técnica inovadora na área da Fisioterapia, 
                                        desenvolvida na França nos anos 80, que tem como objetivo identificar e tratar os traumas emocionais e físicos que estão enraizados no corpo e que podem ser a causa de várias doenças e disfunções, 
                                        buscando equilibrar o corpo e a mente através de suaves toques no corpo. Através da palpação suave em pontos específicos do corpo, 
                                        o fisioterapeuta busca identificar as áreas de tensão e desequilíbrio que indicam a presença de traumas que a própria pessoa experienciou, ou que já herdou de seus antepassados. Em seguida, 
                                        são aplicadas técnicas de estimulação para que o corpo possa reagir e eliminar essas memórias traumáticas, 
                                        ajudando a restabelecer a saúde e a harmonia do organismo de forma profunda e mais duradoura, além de evitar recidivas.
                            </p>
                        </div>

                        <div className="description two">
                            <p className="descriptionP">
                                Como é que através do toque a Microfisioterapia tem êxito nas disfunções emocionais? A Microfisioterapia está embasada na Embriologia. 
                                Quando acontece a fecundação e as primeiras multiplicações de células, 
                                        são formados 3 tubos embrionários de onde são oriundas todas as nossas células. 
                                        Tanto a pele como o cérebro são provenientes do mesmo tudo, ou seja, 
                                        são formados pelo mesmo tecido e estão de alguma forma conectados (queratinócitos e células de Merkel). 
                                        É por isso que a terapia manual tem poder de modulação do sistema nervoso, 
                                        podendo reequilibrar alterações e tratar disfunções emocionais. 
                                        Indicado para tratar questões físicas e emocionais. 
                                        Não possui contraindicações. 
                                        Indicado para todas as idades.           
                            </p>
                        </div>
                            
                    </div> 
                </div>
                
            </Container>
        </>
    )
}