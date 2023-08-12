
import { AboutMe } from "./components/aboutMe"
import { MerryGoRound } from "./components/merryGoRound"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MyServices } from "./components/myServices"
import { TalkToMe } from "./components/talkToMe"

import  ButtonProvider  from "./providers/buttonProvider"

import { Global } from "./styles/Global"


export const App = () => {
 
  return(
    <>
      <ButtonProvider>
        <Global/>
        <Header/>
         <MerryGoRound/>
        <AboutMe/>
       {/* <MyServices/>
        <TalkToMe/>
        <Footer/> */}
      </ButtonProvider>
      
    </>
  )
}
