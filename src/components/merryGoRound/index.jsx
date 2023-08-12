import { useContext, useState } from "react"
import { Container,  } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"
import microterapia from "../../assets/images/microterapia.jpg"



export const MerryGoRound = () => {
    const {closeModal} = useContext(ButtonContext)
    // const [count, setCount] = useState(1)
    // const [radio, setRadio] = useState("radio1")

    // setInterval(function(){
    //     // nextImage()
    //     // selectImage()
    // }, 2000)

    // function nextImage(){
    //     setCount(count + 1)
    //     if(count > 4){
    //         setCount(1)
    //     }
        
    // }

    // function selectImage() {
    //     if(count === 1){
    //         setRadio("radio1")
    //     } else if (count === 2){
    //         setRadio("radio2")
    //         } else if (count === 3){
    //             setRadio("radio3")
    //             } else if (count === 4){
    //                 setRadio("radio4")
    //                 }
    // }

    // console.log(radio)
    return(
        <>
            <Container onClick={closeModal}>    
                <div className="slider">
                    {/* <div className="sliders">
                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>

                        <div className="slide first">
                            <img src={microterapia} alt="image 1"/>
                            <h1 className="title">Microterapia</h1>
                            <p className="subTitle"></p>
                        </div>

                        <div className="slide">
                            <img src={microterapia} alt="image 2"/>
                            <h1 className="title">Microterapia 2</h1>
                            <p className="subTitle">“Grandes transformações através de pequenos insights: essa é a essência da micriterapia.”</p>
                        </div>

                        <div className="slide">
                            <img src={microterapia} alt="image 3"/>
                            <h1 className="title">Microterapia 3</h1>
                            <p className="subTitle">“Grandes transformações através de pequenos insights: essa é a essência da micriterapia.”</p>
                        </div>

                        <div className="slide">
                            <img src={microterapia} alt="image 4"/>
                            <h1 className="title">Microterapia 4</h1>
                            <p className="subTitle">“Grandes transformações através de pequenos insights: essa é a essência da micriterapia.”</p>
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>

                        </div>

                    </div>

                    <div className="manual-navigation">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div> */}
                </div>            
                
            </Container>
           
        </>
    )
}