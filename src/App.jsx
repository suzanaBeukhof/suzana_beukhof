import { AboutMe } from "./components/aboutMe"
import { CreateYourWebsite } from "./components/createYourWebsite"
import { Header } from "./components/header"
import { Global } from "./styles/Global"


export const App = () => {
  return(
    <>
      <Global/>
      <Header/>
      <CreateYourWebsite/>
      <AboutMe/>
      
    </>
  )
}
