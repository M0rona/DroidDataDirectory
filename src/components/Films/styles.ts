import styled from 'styled-components';

export const Container = styled.div<{$isCarrousel: boolean}>`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    cursor: ${({$isCarrousel}) => $isCarrousel ? 'grab' : 'default'};
    user-select: none;

    .swiper {
        margin-left: 0;
        margin-right: 0;
    }

    .swiper-button-prev {
        color: #FFF;
        opacity: 0;
        height: 100%;
        top: 0;
        left: 0;
        width: 50px;

        transition: all .5s ease;

        &:hover {
            opacity: 1;
            background-color: rgba(29, 30, 31, 0.5);
        }	
    }

    .swiper-button-next {
        color: #FFF;
        opacity: 0;
        height: 100%;
        width: 100px;
        top: 0;

        transition: opacity .5s ease;

        &:hover {
            opacity: 1;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    
    margin-right: 2rem;
`

export const Blur = styled.div`
    width: 20rem;
    height: 100%;
    background: linear-gradient(270deg, #1D1E1F 26.77%, rgba(29, 30, 31, 0.00) 97.52%);
    z-index: 2;

    position: absolute;
    right: 0;
    top:0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;

    padding-right: 2rem;
`
