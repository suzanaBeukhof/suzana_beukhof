import { useContext } from "react"
import { Container  } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import microterapia from "../../assets/images/microterapia.jpg"
import leis_biologicas2 from "../../assets/images/leis_biologicas2.jpg"
import constalacao_cover from "../../assets/images/constalacao_cover.jpg"
import regrecao_cover from "../../assets/images/regrecao_cover.jpg"








export const MerryGoRound = () => {
    const {closeModal} = useContext(ButtonContext)

  const data = [
    {id: '1', 
    title: 'Microterapia', 
    paragraph: 'Grandes transformações através de pequenos inights: essa é a essência da microterapia.', 
    image: microterapia },
    {id: '2', title: 'Leis Biológicas', 
    paragraph: 'As leis biológicas revelam a sabedoria oculta por trás dos processos vitais, conectando-nos profundamente com a natureza que nos molda.', 
    image: leis_biologicas2},
    {id: '3', title: 'Constalação Familiar', 
    paragraph: 'Nas constelações familiares, olhamos para além das aparências, desvendando os laços invisíveis que moldam nosso destino.', 
    image: constalacao_cover},
    {id: '4', title: 'Regreção Pré e Perimatal', 
    paragraph: 'Através da regressão pré e perinatal, exploramos as raízes da saúde física e emocional, desvendando a história vital desde seus primeiros momentos.', 
    image: regrecao_cover},
    
  ]


    return(
        <>
            <Container onClick={closeModal} id="home">     
                <Swiper
                    
                    spaceBetween={10}
                    // pagination={{clickable: true}}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}

                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    className="sliderContainer"
                >

                    {data.map((item) => (
                        <SwiperSlide key={item.id} className="sliderContent">
                            <div className="card">
                                <img src={item.image} alt="slider"/>
                                <div className="description">
                                    <p className="title">{item.title}</p>
                                    <p className="paragraph">{item.paragraph}</p>

                                </div>
                            </div>

                        </SwiperSlide>

                    ))}
                    
                </Swiper>  
                
            </Container>
           
        </>
    )
}