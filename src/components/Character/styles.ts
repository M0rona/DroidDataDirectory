import styled from 'styled-components';

export const Container = styled.li<{$active : boolean}>`
    height: 60px;
    background-color: ${({$active}) => $active ? '#0055A4' : 'transparent'};
    margin-bottom: 15px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    padding: 10px 5px;
    gap: 15px;

    margin-right: 20px;
    cursor: pointer;
`;
