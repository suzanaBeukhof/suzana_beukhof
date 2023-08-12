import { createContext, useState } from "react";
import PropTypes from 'prop-types'


export const ButtonContext = createContext([]);

 function ButtonProvider ({children}) {
    const [modal, setModal] = useState('modal')

    function openModal() {
        if (modal === 'modal'){
            setModal('modalOpen')       

        } else {
            setModal('modal')
        }
    }

    function closeModal() {
        setModal('modal') 
               
    }
    return(
        <ButtonContext.Provider
            value={{modal, setModal, openModal, closeModal}}
        >
            {children}
        </ButtonContext.Provider>
    )
}

ButtonProvider.propTypes = {
    children:PropTypes.node,
};

export default ButtonProvider;