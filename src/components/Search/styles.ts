import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px 0px 5px 10px;
    border-bottom: 0.5px solid #FFF;
    margin-right: 20px;

    input, button {
        background: transparent;
        border: none;
    }

    input {
        color: #FFF;
        flex: 1;

        font: 1.8rem 'Montserrat', sans-serif;
        text-transform: capitalize;
    }

    button {
        padding: 0px 10px;
        cursor: pointer;
    }
`;
