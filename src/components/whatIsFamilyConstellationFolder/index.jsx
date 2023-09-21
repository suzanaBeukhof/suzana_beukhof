import { Container } from "./style"
import { useContext, useState } from "react"
import { ButtonContext } from "../../providers/buttonProvider"
// import folder from "../../assets/images/folder.png"



export const WhatIsFamilyConstellationFolder = () => {
    const {closeModal} = useContext(ButtonContext)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState();
    console.log(selectedCard)

    const cards = [
        { 
            id: 1,
            class: "impar",
            title: 'ABANDONO, CARÊNCIA',
            description: "De onde vem essa sensação de estar abandonado, rejeitado, deixado de lado ou sozinho.",
            modalDescriptionOne: "Introdução: A sensação de abandono e carência é uma experiência humana profundamente enraizada em nossas emoções e psicologia. Todos nós, em algum momento da vida, já experimentamos a sensação de sermos deixados de lado ou nos sentirmos sozinhos. Essa emoção complexa pode ter diversas origens e manifestações, e é importante compreender suas raízes para lidar de forma mais saudável com ela.",
            modalDescriptionTwo: "Origens Familiares: Muitas vezes, a sensação de abandono e carência tem suas raízes na infância. A maneira como fomos criados por nossos pais ou cuidadores pode influenciar significativamente como nos relacionamos com os outros no futuro. Se não recebemos a atenção e o apoio emocional necessários na infância, podemos desenvolver uma sensação de carência que perdura ao longo da vida.",
            modalDescriptionTree: "Relações Pessoais: Relações interpessoais desafiadoras ou traumáticas também podem contribuir para sentimentos de abandono e carência. Um término de relacionamento, a perda de um ente querido ou a sensação de ser excluído socialmente podem intensificar essa sensação.",
            modalDescriptionFour: "Expectativas e Comparação Social: A sociedade moderna, com suas expectativas e padrões muitas vezes inatingíveis, pode fazer com que nos sintamos inadequados. A constante comparação com os outros, especialmente nas redes sociais, pode amplificar a sensação de estar sendo deixado de lado.",
            modalDescriptionFive: "Autocrítica Excessiva: A autocrítica e a baixa autoestima também podem alimentar a sensação de carência. Quando somos muito críticos em relação a nós mesmos, é mais provável que acreditemos que não somos dignos de amor e atenção.",
            modalDescriptionSix: "Como Lidar com a Sensação de Abandono e Carência:",
            modalDescriptionSeven: "Autoconhecimento: Identificar as origens pessoais da sensação de carência é um primeiro passo importante para lidar com ela. Isso pode ser feito por meio da terapia, da reflexão pessoal ou do diálogo com pessoas de confiança.",
            modalDescriptionEigth: "Construção de Relacionamentos Saudáveis: Desenvolver relacionamentos saudáveis e de apoio é essencial para superar a sensação de abandono. Investir tempo e esforço em conexões significativas pode preencher o vazio emocional.",
            modalDescriptionNine: "Prática da Autocompaixão: Aprender a ser gentil consigo mesmo e praticar a autocompaixão é fundamental. Isso inclui reconhecer que todos têm falhas e que não precisamos ser perfeitos para sermos amados.",
            modalDescriptionTen: "Buscar Ajuda Profissional: Em casos mais graves, onde a sensação de abandono e carência interfere significativamente na qualidade de vida, a busca por ajuda profissional, como terapia, pode ser fundamental.",
            modalDescriptionEleven: "Conclusão: A sensação de abandono e carência é uma experiência humana comum, mas muitas vezes desafiadora. Compreender suas origens e adotar estratégias saudáveis para lidar com esses sentimentos pode abrir caminho para uma vida mais equilibrada e emocionalmente satisfatória. Lembre-se de que todos merecem amor, cuidado e conexão, e você não está sozinho na busca por essas necessidades emocionais fundamentais.",
        },
        { 
            id: 2,
            class:"par",
            title: 'MEDOS E TRISTEZAS',
            description: "Medo de ser excluído, medo de perder o seu lugar, medo de ficar só e com tempo de se sentir cada vez mais triste.",
            modalDescriptionOne: "Os medos e a tristeza são emoções intrincadamente entrelaçadas na experiência humana. Muitas vezes, esses sentimentos surgem de situações complexas e desafiadoras que todos enfrentamos em algum momento da vida. Vamos explorar três aspectos específicos dessas emoções: o medo de ser excluído, o medo de perder o seu lugar e o medo de ficar só, e como, com o tempo, podem se tornar fontes de tristeza.",
            modalDescriptionTwo: "1. Medo de ser excluído: O medo de ser excluído é uma emoção profundamente arraigada em nossa natureza social. Desde os tempos primitivos, a exclusão de um grupo pode significar uma diferença entre sobreviver ou perecer. Mesmo nos dias de hoje, esse medo persiste, alimentado pelas redes sociais, ambientes de trabalho e círculos sociais. O recebimento de ser rejeitado pode levar ao isolamento emocional, ao conformismo e à falta de desvios. A busca incessante por facilidades muitas vezes nos afasta de quem realmente somos.",
            modalDescriptionTree: "2. Medo de perder o seu lugar: O medo de perder o seu lugar é um medo que se relaciona com a nossa identidade e pertencimento em um grupo ou contexto específico. Isso pode estar ligado a carreira, amizades, família ou qualquer outro círculo significativo. O recebimento de perder esse lugar muitas vezes nos leva a fazer sacrifícios, conformando-nos com situações insatisfatórias apenas para manter nosso status quo. No entanto, esse medo pode nos aprisionar em situações que não nos fazem felizes, gerando uma sensação de tristeza persistente.",
            modalDescriptionFour: "3. Medo de ficar só: O medo de ficar só é uma emoção profundamente humana. O ser humano é circundantemente social, e a solidão pode ser assustadora. No entanto, esse medo, quando não gerenciado corretamente, pode levar a relacionamentos tóxicos e dependência emocional. O recebimento de estar sozinho muitas vezes nos leva a tolerar relacionamentos amorosos, o que pode resultar em um declínio gradual de nossa saúde mental e emocional.",
            modalDescriptionFive: "Com o tempo, esses medos podem evoluir para a tristeza. Uma luta constante contra essas emoções pode ser exaustiva e desgastante. A repressão das emoções e a falta de expressão saudável podem contribuir para a tristeza profunda e a tristeza.",
            
            
        },
        { 
            id: 3,
            class: "impar",
            title: 'DESVALORIZADO E IMPOTENTE',  
            description: "Seus relacionamentos não são recíprocos, você acha não ser capaz de determinadas coisas ou situações.",         
            modalDescriptionOne: "Muitas pessoas enfrentam momentos em que se sentem desvalorizadas e impotentes em seus relacionamentos. Esses sentimentos surgem quando percebemos que o investimento emocional, esforço ou atenção que podem oferecer não é correspondido da mesma forma pelos outros. Aqui, exploraremos essa situação desafiadora e como ela pode impactar a autoestima e a autoconfiança.",
            modalDescriptionTwo: "1. Desvalorizado: Sentir-se desvalorizado em um relacionamento pode ser uma experiência dolorosa. Isso ocorre quando você percebe que suas necessidades, sentimentos e contribuições não são reconhecidos ou valorizados por outro. Pode levar a uma sensação de invisibilidade e desânimo. Muitas vezes, esse sentimento está associado a um desejo profundo de ser apreciado e respeitado por quem você é e pelo que faz.",
            modalDescriptionTree: "2. Impotência: A sensação de impotência surge quando você se percebe incapaz de mudar a dinâmica de um relacionamento que não é recíproco. Pode parecer que não importa o quanto você tente ou se force, uma situação não melhorada. Isso pode minar sua autoconfiança e autoeficácia, fazendo com que você duvide de suas habilidades e competências.",
            modalDescriptionFour: "3. Autoimagem e autoconfiança: Relacionamentos desequilibrados podem ter um impacto significativo na autoimagem e na autoconfiança. Quando você se sente constantemente desvalorizado e impotente, isso pode abalar sua autoestima, levando a pensamentos negativos sobre si mesmo. Podemos começar a questionar seu próprio valor e acreditar que não é merecedor de relacionamentos saudáveis ​​e recíprocos.",
            modalDescriptionFive: "Lidar com esses sentimentos requer autocompaixão e autorreflexão. Aqui estão algumas estratégias para ajudar a lidar com a sensação de desvalorização e impotência:",
            modalDescriptionSix: "Comunique-se: Tente expressar seus sentimentos e necessidades de maneira clara e assertiva. A comunicação aberta pode ser o primeiro passo para melhorar a reciprocidade no relacionamento.",
            modalDescriptionSeven: "Estabeleça limites saudáveis: Defina limites que protejam seu bem-estar emocional. Isso pode envolver dizer não quando necessário e evitar se sobrecarregar.",
            modalDescriptionEigth: "Busque apoio: Fale com amigos, familiares ou um terapeuta sobre seus sentimentos. Ter alguém com quem compartilhar suas preocupações pode ser reconfortante.",
            modalDescriptionNone: "Avalie o relacionamento: Reflita sobre se o relacionamento é realmente benéfico para você. Às vezes, é necessário evitar relacionamentos que estão constantemente desequilibrados.",
            modalDescriptionTen: "Invista em si mesmo: Fortaleça sua autoestima e autoconfiança por meio do autocuidado, aprendizado e desenvolvimento pessoal. Isso pode ajudar a equilibrar o impacto dos relacionamentos desafiadores.",
            modalDescriptionEleven: "Lembrando que todos os relacionamentos têm altos e baixos, mas se você se sente consistentemente desvalorizado e impotente, é importante priorizar sua saúde emocional e bem-estar. Você merece relacionamentos que valorizem e respeitem quem você é.",
        },
        { 
            id: 4,
            class:"par",
            title: 'PERDIDO, PARALISADO E COM SENSO DE URGÊNCIA',
            description: "Não sabe o que fazer ou para onde ir, fica ansioso para encontrar a direção.",
            modalDescriptionOne: "Sentir-se perdido e paralisado com um senso de urgência pode ser uma experiência avassaladora. Essa combinação de emoções ocorre muitas vezes quando enfrentamos um momento de incerteza ou desafio em nossas vidas. Aqui estão algumas estratégias para ajudar a lidar com essa situação:",
            modalDescriptionTwo: "1. Aceite suas emoções: Primeiro, é importante refletir e aceitar seus sentimentos de perda e paralisia. Essas emoções são normais em momentos de incerteza e pressão. Não se é culpado por senti-las.",
            modalDescriptionTree: "2. Divida em passos menores: Às vezes, uma sensação de urgência pode ser avassaladora porque você está pensando em toda a situação como um todo. Tente dividir o problema em pequenas etapas ou tarefas que você pode abordar gradualmente. Isso tornará a situação mais manejável.",
            modalDescriptionFour: "3. Defina metas claras: Estabeleça metas específicas e alcançáveis para si mesmo. Isso ajudará a direcionar sua energia e ação de maneira mais eficaz. Ao atingir essas metas menores, você pode recuperar o senso de controle sobre sua vida.",
            modalDescriptionFive: "4. Priorizar: Identifique o que é mais urgente e importante em sua situação e concentre-se nisso primeiro. Às vezes, uma sensação de urgência vem de sentir que tudo precisa ser feito imediatamente, mas a priorização pode ajudar a aliviar essa pressão.",
            modalDescriptionSix: "5. Procure apoio: Falar com amigos, familiares ou um terapeuta pode ser muito útil. Compartilhar suas preocupações e receber apoio emocional pode aliviar a sensação de isolamento e ajudar a encontrar soluções.",
            modalDescriptionSeven: "6. Pratique a respiração e o mindfulness: A respiração profunda e a prática do mindfulness podem ajudar a reduzir a ansiedade e a sensação de urgência. Dedique alguns minutos por dia para se rir, concentrando-se no presente e respirando profundamente.",
            modalDescriptionEigth: "7. Evite a autopressão: Lembre-se de que todos enfrentaram momentos de incerteza e desafio em suas vidas. Não se pressione demais para encontrar soluções imediatas. Dê a mesma permissão para progredir gradualmente.",
            modalDescriptionNone: "8. Considere buscar orientação profissional: Se você se sente constantemente perdido e paralisado em situações de urgência, pode ser útil procurar a orientação de um terapeuta ou coach. Eles podem fornecer estratégias personalizadas para lidar com esses sentimentos.",
            modalDescriptionTen: "Lembre-se de que é normal sentir-se perdido e paralisado em momentos de urgência, mas com o tempo e o esforço, você pode encontrar maneiras de superar essas emoções e avançar na direção aos seus objetivos. A paciência consigo mesmo é fundamental durante esses períodos desafiadores.",
        },
        { 
            id: 5,
            class: "impar",
            title: 'CANSADO, ESGOTADO, PROCRASTINANDO, TENSO E DORES NO CORPO',
            description: "Vontade de só ficar no sofá ou dormindo, não estando presente no aqui e agora.",
            modalDescriptionOne: "Sentir-se latas",
            modalDescriptionTwo: "1. Priorize o descanso: Pequenas pausas durante o dia.",
            modalDescriptionTree: "2. Gerenciar o estresse: Identifique as fontes de estresse em sua vida e busque estratégias para lidar com elas. Isso pode incluir técnicas de relaxamento, meditação ou exercícios de respiração. Pratique o autocuidado regularmente.",
            modalDescriptionFour: "3. Estabeleça metas realistas: Defina metas alcançáveis ​​e evite sobrecarregar-se.",
            modalDescriptionFive: "4. Combate à procrastinação: Quebre as tarefas em pequenos passos e comece com algo simples. Às vezes, o ato de começar pode ajudar, use técnicas de gestão do tempo, como a técnica Pomodoro.",
            modalDescriptionSix: "5. Movimente-se: Faça exercícios físicos regularmente, mesmo que sejam caminhadas curtas. O exercício pode aliviar o esforço.",
            modalDescriptionSeven: "6. Cuidado da alimentação: Mantenha uma dieta equilibrada.",
            modalDescriptionEigth: "7. Busque apoio: Fale com amigos, familiares ou um profissional de saúde mental.",
            modalDescriptionNone: "8. Consulte um profissional de saúde: Se as dores no corpo persistirem ou se você continuar se sentindo extremamente cansado e esgotado, é importante procurar um médico para descartar problemas de saúde subjacentes. Lembre-se de que é normal enfrentar períodos de cansaço e estresse na vida, mas é fundamental cuidar de si mesmo e buscar maneiras saudáveis ​​de lidar com essas emoções e sintomas. O autocuidado e a atenção à sua saúde física e mental são investimentos importantes no seu bem-estar a longo prazo.",
           
        },
        { 
            id: 6,
            class:"par",
            title: 'RAIVA, RESSENTIMENTO E REMORSO',
            description: "Esses sentimentos em relação ao outro ou com você mesmo.",
            modalDescriptionOne: "A raiva, o ressentimento e o remorso são emoções complexas que todos nós experimentamos em algum momento da vida. Cada uma delas tem suas próprias características e origens. Vamos explorar cada uma dessas emoções:",
            modalDescriptionTwo: "1. Raiva: A raiva é uma emoção normal e natural que todos os seres humanos experimentam. Ela pode ser desencadeada por uma série de fatores, como frustração, injustiça, irritação ou ameaça percebida. A raiva pode variar de leve irritação a uma explosão intensa de emoção. É importante lembrar que a raiva em si não é necessariamente prejudicial; é a maneira como expressamos e lidamos com ela que pode ser construtiva ou destrutiva.",
            modalDescriptionTree: "2. Ressentimento: O ressentimento é uma emoção que se desenvolve ao longo do tempo, muitas vezes como resultado de feridas emocionais não resolvidas. Pode ocorrer quando sentimos que fomos injustiçados, maltratados ou desconsiderados por alguém ou por uma situação. O ressentimento pode ser prejudicial porque, se não for tratado, pode corroer os relacionamentos e prejudicar nossa saúde emocional.",
            modalDescriptionFour: "3. Remorso: O remorso é uma emoção que surge quando nos arrependemos de nossas ações passadas, especialmente quando acreditamos que prejudicamos alguém ou cometemos um erro significativo. O remorso é muitas vezes acompanhado pelo desejo de fazer as pazes ou corrigir o erro. Pode ser uma emoção construtiva, pois nos lembra de nossa responsabilidade e nos impulsiona a agir de maneira mais ética no futuro.",
            modalDescriptionFive: "Lidar com essas emoções pode ser desafiador, mas é importante fazê-lo de maneira saudável:",
            modalDescriptionSix: "- Gerenciando a Raiva: Pratique a autorregulação emocional, aprendendo a identificar os gatilhos da raiva e desenvolvendo estratégias para lidar com ela de maneira construtiva. A comunicação eficaz é fundamental. Tente expressar sua raiva de forma assertiva, em vez de agressiva, e ouvir o ponto de vista dos outros. Aprenda técnicas de relaxamento, como a respiração profunda, para ajudar a acalmar a raiva.",
            modalDescriptionSeven: "- Lidando com o Ressentimento: Reflita sobre a origem do ressentimento e tente entender os sentimentos subjacentes. Pratique o perdão, não necessariamente para absolver a outra pessoa, mas para liberar-se do peso emocional do ressentimento. Busque aconselhamento ou terapia se o ressentimento persistir e afetar significativamente sua qualidade de vida.",
            modalDescriptionEigth: "- Lidando com o Remorso: Assuma a responsabilidade por suas ações e tente fazer reparações quando apropriado. Use o remorso como uma oportunidade para aprender e crescer, evitando repetir os mesmos erros no futuro. Fale com um amigo de confiança ou um profissional de saúde mental para ajudar a processar seus sentimentos de remorso. Lembre-se de que todas essas emoções são partes normais da experiência humana, e é importante reconhecê-las e lidar com elas de maneira construtiva para promover um bem-estar emocional saudável.",
            
        }

      ];

    const abreModal = (card) => {
        setSelectedCard(card);
        setModalOpen(true);

        
    };
    
    const fechaModal = () => {
        setSelectedCard(null);
        setModalOpen(false);
    };

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                    <h1 className="tittle">O QUÊ <span className="tittleSpan">VOCÊ ENCONTRARÁ NESSE CONTEÚDO?</span></h1>
                    <div className="cardsBox">

                       {cards.map((card) => (
                            <div className={card.class}  key={card.id} onClick={() => abreModal(card)}>
                                <div className="tittleBox">
                                    <p className="paragraphTittle">{card.title}</p>
                                    <p className="description">{card.description}</p>                                    
                                </div>

                                <div className="numberBox">
                                    <p className="numberTittle">{card.id}</p>
                                </div>
                                
                            </div>
                        ))}

                    </div>

                    {modalOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2 className="titleModal">{selectedCard.title}</h2>
                                <p className="descriptionModal">{selectedCard.modalDescriptionOne}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionTwo}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionTree}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionFour}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionFive}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionSix}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionSeven}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionEigth}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionNine}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionTen}</p>
                                <p className="descriptionModal">{selectedCard.modalDescriptionEleven}</p>
                                <button onClick={fechaModal}>Fechar</button>
                            </div>
                        </div>
                    )}
                 
                </div> 
            </Container>
        </>
    )
}