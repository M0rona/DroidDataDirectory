import { useState } from 'react';

import { Switch } from './components/Switch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Film } from '../Film';

import * as Styled from './styles'
import 'swiper/css'
import 'swiper/css/navigation'

interface FilmsProps {
    movies?: string[];
}

export const Films = ({movies}: FilmsProps) => {
    const [isCarrousel, setIsCarrousel] = useState<boolean>(true);
    
  return (
    <Styled.Container $isCarrousel={isCarrousel}>
        <Styled.Header>
            <h2>Movies</h2>

            <Switch mode={{isCarrousel, setIsCarrousel}}/>
        </Styled.Header>


        {isCarrousel && 
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
            >
                {movies?.map((movie) => (
                    <SwiperSlide key={movie}  >
                        <Film url={movie}/>
                    </SwiperSlide>
                ))}

                <SwiperSlide />

                <Styled.Blur />
            </Swiper>
        }

        {!isCarrousel && 
            <Styled.Grid>
                {movies?.map((movie) => (
                    <Film key={movie} url={movie}/>
                ))}
            </Styled.Grid>
        }
    </Styled.Container>
  )
}
