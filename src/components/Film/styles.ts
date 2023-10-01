import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    img {
        border-radius: 8px;
        height: 35rem;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;

        h3 {
            font-size: 1.7rem;
            font-weight: 600;
        }

        span {
            color: #B6B6B6;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
`;
