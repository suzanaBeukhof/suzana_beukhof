import { Container, Content } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"

import my_services1 from "../../assets/images/my_services1.jpg"
import my_services2 from "../../assets/images/my_services2.jpg"
import my_services3 from "../../assets/images/my_services3.jpg"

export const MyServices = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <h1 className="title">Meus serviços</h1>

                <Content>
                    <div className="box1">
                        <img src={my_services1}/>
                        <p className="tittleParagraph">Desenvolvimento Web Personalizado</p>
                        <p className="paragraph">Crio sites e aplicações web personalizados 
                        para atender às necessidades específicas de cada cliente.</p>
                        <button>Mais informações</button>
                    </div>
                    <div className="box2">
                    <img src={my_services2}/>
                        <p className="tittleParagraph">Migração de Site</p>
                        <p className="paragraph">Transfiro seu site para uma plataforma mais avançada, 
                        mantendo a integridade do conteúdo e dos dados.</p>
                        <button>Mais informações</button>
                    </div>
                    <div className="box3">
                    <img src={my_services3}/>
                        <p className="tittleParagraph">SEO para Sites</p>
                        <p className="paragraph">Otimizo seu site para que ele apareça 
                        nos primeiros resultados das pesquisas dos mecanismos de busca.</p>
                        <button>Mais informações</button>
                    </div>
                </Content>

                
                
            </Container>
        </>
    )
}