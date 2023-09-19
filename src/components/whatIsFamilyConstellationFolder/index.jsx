import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"
// import folder from "../../assets/images/folder.png"



export const WhatIsFamilyConstellationFolder = () => {
    const {closeModal} = useContext(ButtonContext)

    // const cards = [
    //     {
    //         "tittle": "ABANDONO, CARÊNCIA",
    //         "number": "1",
    //         "description": "De onde vem essa sensação de estar abandonado, rejeitado, deixado de lado ou sozinho",
    //     },
    //     {
    //         "tittle": "MEDOS E TRISTEZAS",
    //         "number": "2",
    //         "description": "Medo de ser excluído, medo de perder o seu lugar, medo de ficar só e com o tempo se sentir cada vez mais triste.",
    //     }
    // ]

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                    <h1 className="tittle">O QUÊ <span className="tittleSpan">VOCÊ ENCONTRARÁ NESSE CONTEÚDO?</span></h1>
                    <div className="cardsBox">
                       
                        <div className="card" key={1}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">ABANDONO, CARÊNCIA</p>
                                <div className="numberBox">
                                    <p className="numberTittle">1</p>
                                </div>
                            </div>
                            <p className="description">
                            De onde vem essa sensação de estar abandonado, rejeitado, deixado de lado ou sozinho.
                            </p>
                        </div>

                        <div className="card" key={2}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">MEDOS E TRISTEZAS</p>
                                <div className="numberBox">
                                    <p className="numberTittle">2</p>
                                </div>
                            </div>
                            <p className="description">
                            Medo de ser excluído, medo de perder o seu lugar, medo de ficar só e com o tempo se sentir cada vez mais triste.
                            </p>
                        </div>

                        <div className="card" key={3}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">DESVALORIZADO E IMPOTENTE</p>
                                <div className="numberBox">
                                    <p className="numberTittle">3</p>
                                </div>
                            </div>
                            <p className="description">
                            Seus relacionamentos não são recíprocos, você acha não ser capaz de determinadas coisas ou situações.
                            </p>
                        </div>

                        <div className="card" key={4}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">PERDIDO, PARALISADO E COM SENSO DE URGÊNCIA</p>
                                <div className="numberBox">
                                    <p className="numberTittle">4</p>
                                </div>
                            </div>
                            <p className="description">
                            Não sabe o que fazer ou para onde ir, fica ansiosa para encontrar a direção.
                            </p>
                        </div>

                        <div className="card" key={5}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">CANSADO, ESGOTADO, PROCRASTINANDO, TENSO E DORES NO CORPO</p>
                                <div className="numberBox">
                                    <p className="numberTittle">5</p>
                                </div>
                            </div>
                            <p className="description">
                            Vontade de só ficar no sofá ou dormindo, não estando presente no aqui e agora.
                            </p>
                        </div>

                        <div className="card" key={6}>
                            <div className="tittleBox">
                                <p className="paragraphTittle">RAIVA, RESSENTIMENTO E REMORSO</p>
                                <div className="numberBox">
                                    <p className="numberTittle">6</p>
                                </div>
                            </div>
                            <p className="description">
                            Esses sentimentos em relação ao outro ou com você mesmo.
                            </p>
                        </div>
                        


                      
                    </div>
                 
                </div> 
            </Container>
        </>
    )
}