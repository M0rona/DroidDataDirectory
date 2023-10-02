import { Skeleton } from "../../../../../components/Skeleton"
import switchIcon from "../../../../../assets/icons/switchIcon.svg"

import * as Styled from "../../../../../components/Films/styles"
import { Container } from "./styles"

export const SkeletonFilms = () => {
  return (
    <Styled.Container $isCarrousel={false} >
      <Styled.Header>
        <h2>Movies</h2>

        <img src={switchIcon} alt="iconSwitch" />
      </Styled.Header>

      <Container>
        <Styled.Blur />
        
        <div className="column">
          <Skeleton height="30rem" />
          <Skeleton height="2rem" width="85%" />
          <Skeleton height="1.5rem" width="50%" />
        </div>

        <div className="column">
          <Skeleton height="30rem" />
          <Skeleton height="2rem" width="85%" />
          <Skeleton height="1.5rem" width="50%" />
        </div>

        <div className="column">
          <Skeleton height="30rem" />
          <Skeleton height="2rem" width="85%" />
          <Skeleton height="1.5rem" width="50%" />
        </div>

        <div className="column">
          <Skeleton height="30rem" />
          <Skeleton height="2rem" width="85%" />
          <Skeleton height="1.5rem" width="50%" />
        </div>
      </Container>
    </Styled.Container>
  )
}
