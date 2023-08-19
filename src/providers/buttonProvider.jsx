import { createContext, useState } from "react";
import PropTypes from 'prop-types'


export const ButtonContext = createContext([]);

 function ButtonProvider ({children}) {
    const [modal, setModal] = useState('modal')
    const [subMenuMobile, setSubMenuMobile] = useState('treatmentsBoxMobile')
    const [subMenu, setSubMenu] = useState('treatmentsBox')
    const [subMenuFooter, setSubMenuFooter] = useState('treatmentsBoxFooter')

    function openModal() {
        if (modal === 'modal'){
            setModal('modalOpen')       

        } else {
            setModal('modal')
        }
    }

    function closeModal() {
        setModal('modal') 
        setSubMenuMobile('treatmentsBoxMobile') 
        setSubMenu('treatmentsBox') 
               
    }

    // submenu mobile
    function openSubMobile() {
        if (subMenuMobile === 'treatmentsBoxMobile'){
            setSubMenuMobile('treatmentsBoxMobileOpen')       

        } else {
            setSubMenuMobile('treatmentsBoxMobile')
        }
        
    }

   

    // submenu desktop
    function openSub() {
        if (subMenu === 'treatmentsBox'){
            setSubMenu('treatmentsBoxOpen')       

        } else {
            setSubMenu('treatmentsBox')
        }

        console.log(subMenu)
    }

    // fecha os submenu mobile e desktop
    function closeSub() {
        setSubMenu('treatmentsBox') 
        setSubMenuMobile('treatmentsBoxMobile') 
               
    }

    function openSubFooter() {
        if (subMenuFooter === 'treatmentsBoxFooter'){
            setSubMenuFooter('treatmentsBoxOpenFooter')       

        } else {
            setSubMenuFooter('treatmentsBoxFooter')
        }

        console.log(subMenuFooter)
    }
    return(
        <ButtonContext.Provider
            value={{modal, setModal, openModal, closeModal, subMenuMobile, 
                subMenu, openSubMobile,  openSub, closeSub, openSubFooter,
                subMenuFooter, setSubMenuFooter
            }}
        >
            {children}
        </ButtonContext.Provider>
    )
}

ButtonProvider.propTypes = {
    children:PropTypes.node,
};

export default ButtonProvider;