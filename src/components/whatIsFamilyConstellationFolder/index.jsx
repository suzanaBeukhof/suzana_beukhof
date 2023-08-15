import { Container } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"
import folder from "../../assets/images/folder.png"



export const WhatIsFamilyConstellationFolder = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <div className="contentBox">
                    <img src={folder} alt="folder"/>
                            
                </div> 
            </Container>
        </>
    )
}