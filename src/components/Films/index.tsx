import { useState } from 'react';
import { useCharacterContext } from '../../contexts/Characters';

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
    const { windowWidth } = useCharacterContext();
    
    
    return (
        <Styled.Container $isCarrousel={isCarrousel}>
            <Styled.Header>
                <h2>Movies</h2>

                {windowWidth > 500 &&
                    <Switch mode={{isCarrousel, setIsCarrousel}}/>
                }
            </Styled.Header>


            {isCarrousel && windowWidth > 500 &&  
                <Swiper
                    slidesPerView={windowWidth < 1500 ? windowWidth < 1165 ? 2 : 3 : 4}
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

            {(windowWidth > 500 ? !isCarrousel : true) && 
                <Styled.Grid>
                    {movies?.map((movie) => (
                        <Film key={movie} url={movie}/>
                    ))}
                </Styled.Grid>
            }
        </Styled.Container>
    )
}
