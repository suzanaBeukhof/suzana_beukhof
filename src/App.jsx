import { AboutMe } from "./components/aboutMe"
import { CreateYourWebsite } from "./components/createYourWebsite"
import { Header } from "./components/header"
import { MyServices } from "./components/myServices"
import { Global } from "./styles/Global"


export const App = () => {
  return(
    <>
      <Global/>
      <Header/>
      <CreateYourWebsite/>
      <AboutMe/>
      <MyServices/>
      
    </>
  )
}
