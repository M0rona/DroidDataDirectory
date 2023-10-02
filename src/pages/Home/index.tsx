import { useCharacterContext } from '../../contexts/Characters';

import LogoStarWars from '../../assets/logos/StarWars.png'
import LogoInnova from '../../assets/logos/Innova.png'
import iconBack from '../../assets/icons/iconBack.svg'

import { SectionCharacters } from './SectionCharacters'
import { SectionInfos } from './SectionInfos'

import * as Styled from './styles'
import GlobalStyles from '../../styles/Global';

export const Home = () => {
  const { windowWidth, isMobile, setIsMobile } = useCharacterContext();

  const returnCharacters = () => {
    if(windowWidth < 1024 && isMobile) setIsMobile(false)
  }

  return (
    <>
        
        <Styled.Header>
          <img src={LogoStarWars} alt="LogoStarWars" />
          <img src={LogoInnova} alt="LogoInnova" />
        </Styled.Header>

        {windowWidth < 1024 && isMobile  && 
          <Styled.ButtonBack onClick={returnCharacters}>
            <img src={iconBack} alt="iconBack" />
            <span>Return to characters</span>
          </Styled.ButtonBack>
        }

        <Styled.Main>
            { (windowWidth > 1024 ? true : !isMobile) &&
              <Styled.Section 
                $width={windowWidth < 1024 ? "100%" : "45rem"} 
                $transp={true} 
                $leaked={true}
                $scroll={windowWidth > 1024 ? true : !isMobile}
              >
                  <SectionCharacters />
              </Styled.Section>
            }

            { (windowWidth > 1024 ? true : isMobile)  && 
              <Styled.Section 
                $width={windowWidth < 1024 ? "100%" : "100rem"} 
                $padding={true} 
                $gap={true}
                $scroll={windowWidth > 1024}
              >
                <SectionInfos />
              </Styled.Section>
            }
            
        </Styled.Main>

        <GlobalStyles $scrollPage={windowWidth > 1024 ? true : !isMobile} />
    </>
  )
}
