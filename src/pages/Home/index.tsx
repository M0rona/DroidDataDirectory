import LogoStarWars from '../../assets/logos/StarWars.png'
import LogoInnova from '../../assets/logos/Innova.png'

import { SectionCharacters } from './SectionCharacters'
import { SectionInfos } from './SectionInfos'

import * as Styled from './styles'

export const Home = () => {
  return (
    <>
        <Styled.Header>
            <img src={LogoStarWars} alt="LogoStarWars" />
            <img src={LogoInnova} alt="LogoInnova" />
        </Styled.Header>

        <Styled.Main>
            <Styled.Section $width="45rem" $transp={true} >
                <SectionCharacters />
            </Styled.Section>

            <Styled.Section $width="100rem" $padding={true} $gap={true} $scroll={true}>
              <SectionInfos />
            </Styled.Section>
        </Styled.Main>
    </>
  )
}
