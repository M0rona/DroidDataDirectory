import { filmsProvider } from "../../hooks/filmsProvider"
import { Container } from "./styles"

interface FilmProps {
    url: string;
}

export const Film = ({url}: FilmProps) => {
    const {image, title, year} = filmsProvider(url)

    return (
        <Container>
            <img src={image} alt="filmImage" />

            <div>
                <h3>{title}</h3>

                <span>{year}</span>
            </div>
        </Container>
    )
}
