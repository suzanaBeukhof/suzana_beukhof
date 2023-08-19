import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"
// import folder from "../../assets/images/folder.png"



export const WhatIsFamilyConstellationFolder = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                    <div className="supBox">
                        <div className="firstBox">
                            <p className="paragraph">
                                As três leis sistêmicas são os princípios fundamentais que
                                orientam a abordagem terapêutica da constelação
                                familiar e que ajudam a compreender as dinâmicas que
                                existem nas relações familiares e pessoais. São elas:
                            </p>
                        </div>
                        <div className="secondBox">
                            <div className="numberBox">
                                <p className="number">01</p>
                            </div>
                            <div className="textBox">
                                <p className="paragraph">Lei do Pertencimento: Todos os membros de
                                    um sistema familiar têm o direito de pertencer e
                                    devem ser incluídos com respeito e dignidade,
                                    independentemente de sua história,
                                    comportamento ou papel na família
                                </p>
                            </div>
                        </div>
                        <div className="thirdBox"> 
                            <div className="numberBox">
                                <p className="number">02</p>
                            </div>                           
                            <div className="textBox">
                                <p className="paragraph">Lei da Ordem: Cada membro da família tem
                                    um lugar e uma ordem dentro do sistema, e
                                    é importante que essa ordem seja
                                    respeitada. Quando essa ordem é
                                    perturbada ou desrespeitada, pode haver
                                    conflitos, desequilíbrios e problemas
                                    emocionais.
                                </p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="infBox">
                        <div className="fourthBox">
                            <div className="numberBox">
                                <p className="number">03</p>
                            </div>
                            <div className="textBox">
                                <p className="paragraph">
                                Lei do Equilíbrio: Todo sistema busca o
                                equilíbrio e a harmonia, e para isso é
                                necessário que haja um equilíbrio entre dar
                                e receber. Quando esse equilíbrio é
                                perturbado, podem surgir problemas
                                emocionais e relacionais, como
                                sentimentos de culpa, raiva, ressentimento,
                                etc.
                                </p>
                            </div>
                        </div>
                        <div className="fifthBox">
                            <p className="paragraph">
                                Ao entender e respeitar essas leis, é possível melhorar a
                                comunicação, o relacionamento e o bem-estar emocional
                                de todos os membros do sistema familiar.
                                Embora a constelação familiar seja frequentemente
                                utilizada para tratar questões familiares e pessoais, ela
                                também pode ser aplicada em empresas e organizações
                                para melhorar as dinâmicas de equipe e aumentar a
                                eficiência do trabalho em grupo.
                            </p>
                        </div>

                    </div>
                </div> 
            </Container>
        </>
    )
}