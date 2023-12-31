import styled from 'styled-components';

export const ImageSection = styled.section<{$img? : string | null}>`
    background: linear-gradient(0deg, #1D1E1F 0.02%, rgba(0, 0, 0, 0.00) 100.02%), ${({ $img }) => $img 
    ? `url(${$img}), lightgray 50% / cover no-repeat`
    : '#484848;'
    };
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 

    min-height: 38.5rem;

    display: flex;
    align-items: flex-end;
    padding: 0 3.5rem;

    h1 {
        font-size: 6rem;
    }

    @media screen and (max-width: 500px) {
        min-height: 20rem;

        h1 {
            font-size: 3.2rem;
        }
    }
`;

export const Infos = styled.section`
    display: flex;
    padding: 10px 0px 30px 35px;
    flex-direction: column;
    gap: 3.8rem;

    p {
        font-size: 1.4rem;
        font-style: 500;
        color: #B6B6B6;

        width:95%;
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: 1.3rem;
        }
    }
`

export const PersonInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem;
    margin-right: 2rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.3rem;



        div {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            @media screen and (max-width: 500px) {
                width: 100%;
            }

            h3 {
                color: #B6B6B6;
                font-size: 1.4rem;
                font-weight: 500;
            }

            span {
                font-size: 2rem;
                width: 100%;
                text-align: left;
                text-transform: capitalize;
            }
        }

        img {
            height: 5rem;
        }
    }
`
