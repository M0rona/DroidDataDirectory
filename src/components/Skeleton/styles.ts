import styled from 'styled-components';

interface ContainerTypes {
    $width?: string;
    $height?: string;
    $lowGap?: boolean;
}

interface DispositionTypes {
    $horizontal?: boolean;
    $lowGap?: boolean;
}

export const Container = styled.div<ContainerTypes>`
    background: linear-gradient(
        110deg, #363636 8%,
        #5e5e5e 18%,
        #363636 33%
    );
    background-size: 200% 100%;
    width: ${({ $width }) => $width ? $width : '95%'};
    height: ${({ $height }) => $height ? $height : '30px'};
    border-radius: 8px;
    animation: 1.5s skeleton linear infinite;

    @keyframes skeleton {
        to {
            background-position-x: -200%; 
        }
    }
`;

export const Disposition = styled.div<DispositionTypes>`
    display: flex;
    flex-direction: ${({ $horizontal }) => $horizontal ? 'row' : 'column'};

    gap: ${({ $horizontal, $lowGap }) => $horizontal ? 3.5 : $lowGap ? '0.5' : '1.5'}rem;
`
