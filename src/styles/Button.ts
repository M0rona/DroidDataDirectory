import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: none;
    
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius:50%;
    cursor: pointer;

    transition: background-color 0.3s;
    &:hover {
        background-color: #363636;
    }
`