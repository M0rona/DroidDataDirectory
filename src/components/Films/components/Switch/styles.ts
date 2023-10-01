import styled from 'styled-components';

export const Container = styled.div`
    width: 7.8rem;

    display: flex;
    align-items: center;

    border-radius: 4px;
    background: #363636;
`;

export const Option = styled.div<{$active: boolean}>`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({$active}) => $active ? '#0055A4' : 'transparent'};
    border-radius: 4px;
    cursor: ${({$active}) => $active ? 'default' : 'pointer'};
`
