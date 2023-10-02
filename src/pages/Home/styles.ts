import styled from 'styled-components';

interface SectionProps {
  $width?: string;
  $padding?: boolean;
  $transp?: boolean;
  $gap?: boolean;
  $scroll?: boolean;
  $leaked?: boolean;
}

export const Header = styled.header`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;

    img {
        width: 15rem;
    }
`;

export const Main = styled.main`
    height: calc(100% - 67px);
    padding-top: 3rem;

    display: flex;
    justify-content: center;
    gap: 40px;
`;

export const Characters = styled.ul`
    overflow: hidden;
    overflow-y: auto;
`;

export const Section = styled.section<SectionProps>`
    ${({ $width }) => $width ? `width: ${$width};` : 'flex: 1;'};
    height: ${({ $scroll }) => $scroll ? '100%' : 'fit-content' };
    padding: ${({ $padding }) => $padding ? 0 : '20px 0px 20px 20px'};
    border-radius: 8px;
    border: 1px solid #4D4C4C;
    background: rgba(29, 30, 31, ${({ $transp }) => $transp ? '0.85' : '1'});

    display: flex;
    flex-direction: column;
    gap: ${({ $gap }) => $gap ? 0 : 25}px;
    ${({ $scroll, $leaked }) => $scroll && !$leaked && 'overflow-y: auto;'}
`;

export const ButtonBack = styled.button`
    width: 100%;

    background-color: rgba(29, 30, 31, 0.85);
    border: none;
    border-radius: 0.8rem;
    margin-top: 3rem;
    padding: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
        height: auto;
        width: 18px;
    }

    span {
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
    }
`
