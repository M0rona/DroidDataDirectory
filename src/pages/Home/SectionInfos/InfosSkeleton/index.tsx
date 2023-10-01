import * as Styled from '../styles'
import { Skeleton } from '../../../../components/Skeleton'

export const InfosSkeleton = () => {
  return (
    <>
        <Styled.ImageSection>
            <Skeleton width="68.4rem" height="7.3rem" />
        </Styled.ImageSection>

        <Styled.Infos>
          <Skeleton width="90%" height="0.8rem" repeat={5} lowGap={true} />
          <Skeleton width="18.9rem" height="5rem" horizontal={true} repeat={3} />
        </Styled.Infos>
    </>
  )
}
