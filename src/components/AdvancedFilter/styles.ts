import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const DropDawn = styled.div`
    position: absolute;
    right: -39rem;
    top: -20px;

    @media screen and (max-width: 1024px) {
        right: 0;
        top: 60px;

        width: 30rem;
    }

    background-color: #1D1E1F;
    border: 1px solid #4D4C4C;
    width: 35rem;
    padding: 20px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    label {
        font-size: 1.5rem;
    }

    input {
        padding: 1rem;
        background-color: #363636;
        border: none;
        border-radius: 8px;
        color: #B6B6B6;

        font: 1.5rem 'Montserrat', sans-serif;
    }

    button {
        background-color: #0055A4;
        font: 1.5rem 'Montserrat', sans-serif;
        color: #FFF;
        padding: 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;

        &:hover {
            background-color: #033f77;
        }
    }

    div {
        display: flex;
        justify-content: space-between;

        span {
            background-color: #9E7C00;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            user-select: none;
        }
    }
`

export const Tooltip = styled.div`
    position: absolute;
    
    top: -30px;
    right: 20px;

    background-color: #9E7C00;
    padding: 1rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;

    user-select: none;
`