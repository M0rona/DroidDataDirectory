import styled from 'styled-components';

interface SectionProps {
  $width?: string;
  $padding?: boolean;
  $transp?: boolean;
  $gap?: boolean;
  $scroll?: boolean;
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
    padding: ${({ $padding }) => $padding ? 0 : '20px 0px 20px 20px'};
    border-radius: 8px;
    border: 1px solid #4D4C4C;
    background: rgba(29, 30, 31, ${({ $transp }) => $transp ? '0.85' : '1'});

    display: flex;
    flex-direction: column;
    gap: ${({ $gap }) => $gap ? 0 : 25}px;
    ${({ $scroll }) => $scroll && 'overflow-y: auto;'}
`;
