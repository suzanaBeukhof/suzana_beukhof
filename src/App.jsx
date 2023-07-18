
import { AboutMe } from "./components/aboutMe"
import { CreateYourWebsite } from "./components/createYourWebsite"
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
        <CreateYourWebsite/>
        <AboutMe/>
        <MyServices/>
        <TalkToMe/>
        <Footer/>
      </ButtonProvider>
      
    </>
  )
}
