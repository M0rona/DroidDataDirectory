import slide from '../../../../assets/icons/IconSlide.svg'
import grid from '../../../../assets/icons/IconGrid.svg'

import { Container, Option } from "./styles"

interface ModeProps {
    mode: {
        isCarrousel: boolean;
        setIsCarrousel: (isCarrousel: boolean) => void;
    }
}

export const Switch = ({mode}: ModeProps) => {
    const {isCarrousel, setIsCarrousel} = mode;

    return (
        <Container>
            <Option $active={isCarrousel} onClick={() => setIsCarrousel(true)}>
                <img src={slide} alt="iconSlide" />
            </Option>

            <Option $active={!isCarrousel} onClick={() => setIsCarrousel(false)}>
                <img src={grid} alt="iconGrid" />
            </Option>
        </Container>
    )
}
