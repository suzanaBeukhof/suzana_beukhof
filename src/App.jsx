
import { AboutMe } from "./components/aboutMe"
import { MerryGoRound } from "./components/merryGoRound"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MyServicesMicroteraph } from "./components/myServiceMicroteraph"
import { TalkToMe } from "./components/talkToMe"
import { WhatIsMicrotherapy } from "./components/whatIsMicrotherapy"
import { MyServiceBiologicalLaws } from "./components/myServiceBiologicalLaws"

import  ButtonProvider  from "./providers/buttonProvider"

import { Global } from "./styles/Global"
import { WhatIsBiologicalLaws } from "./components/whatIsBiologicalLaws"
import { MyServiceFamilyConstellation } from "./components/myServiceFamilyConstellation"
import { WhatIsFamilyConstellation } from "./components/whatIsFamilyConstellation"
import { WhatIsFamilyConstellationcont } from "./components/whatIsFamilyConstellationcont"
import { MyServiceRegression } from "./components/myServicRegression"
import { WhatIsRegression } from "./components/whatIsRegression"
import { WhatIsFamilyConstellationFolder } from "./components/whatIsFamilyConstellationFolder"


export const App = () => {
 
  return(
    <>
      <ButtonProvider>
        <Global/>
        <Header/>
        <MerryGoRound/>
        <AboutMe/>
        <MyServicesMicroteraph/>
        <WhatIsMicrotherapy/>
        <MyServiceBiologicalLaws/>
        <WhatIsBiologicalLaws/>
        <MyServiceFamilyConstellation/>
        <WhatIsFamilyConstellation/>
        <WhatIsFamilyConstellationFolder/>
        <WhatIsFamilyConstellationcont/>
        <MyServiceRegression/>
        <WhatIsRegression/>
        <TalkToMe/>
        {/*<Footer/> */}
      </ButtonProvider>
      
    </>
  )
}
