import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"



export const WhatIsRegression = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                
            <div className="contentBox">
                        <div className="description one">
                            <p className="descriptionP">
                                A vida é um processo contínuo de desenvolvimento e
                                aprendizado, e esse processo começa muito antes do
                                nosso nascimento. As primeiras vivências no útero
                                materno têm se revelado como fundamentais para a
                                saúde física e emocional das pessoas ao longo de
                                toda a sua existência. A gestação é um período de
                                intensa transformação, no qual somos moldados pelas
                                experiências primárias que vivenciamos nesse
                                ambiente único.
                                Durante a gestação, não apenas nosso corpo se
                                desenvolve, mas também nossa mente e emoções. As
                                experiências que experimentamos nesse período
                                inicial deixam uma marca profunda em nosso ser,
                                influenciando nossas emoções mais básicas, crenças,
                                sentimentos e conclusões. Essas impressões iniciais
                                atuam como a base para a forma como percebemos
                                e interpretamos o mundo ao nosso redor.
                                É nesse momento que os alicerces das nossas vidas
                                são estabelecidos. As experiências intrauterinas criam
                                scripts que, muitas vezes, inconscientemente, nos
                                guiam ao longo da vida. Nossas reações emocionais,
                                padrões comportamentais e até mesmo nossa saúde
                                física podem ser influenciados por esses primeiros
                                registros.
                            </p>
                        </div>

                        <div className="description two">
                            <p className="descriptionP">
                                A vida, então, torna-se uma repetição desses scripts
                                criados a partir das vivências no útero. As experiências
                                iniciais podem ser solidificadas e reforçadas ou
                                amenizadas e transformadas pelas experiências
                                subsequentes na infância e vida adulta.
                                É crucial compreender a importância dessas
                                experiências primárias para que possamos enfrentar e
                                superar os desafios que a vida nos apresenta. O que
                                vivenciamos ao longo da vida é filtrado através das
                                lentes dessas experiências iniciais. Se tivermos tido
                                experiências negativas ou traumáticas no útero, é
                                provável que enfrentemos desafios emocionais e
                                comportamentais que se originam dessa base.
                                No entanto, a conscientização desse processo nos
                                oferece uma oportunidade de cura e transformação.
                                Ao explorarmos e compreendermos essas origens,
                                podemos identificar padrões limitantes e trabalhar
                                para reescrever nossos scripts internos. A terapia de
                                regressão pré e perinatal pode ser uma ferramenta
                                poderosa nesse processo, permitindo que revisitemos
                                essas experiências primárias e as abordemos com
                                compreensão e amor.
                                Ao resgatarmos e acolhermos essas partes iniciais de
                                nós mesmos, podemos iniciar um caminho de cura e
                                crescimento emocional. Essa jornada nos leva a um
                                maior autoconhecimento e à possibilidade de
                                transformar nossas vidas para melhor.
                            </p>
                        </div>
                     
                    </div> 
            </Container>
        </>
    )
}