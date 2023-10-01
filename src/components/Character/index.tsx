import { Container } from "./styles";
import { useCharacterContext } from "../../contexts/Characters";

interface CharacterProps {
  name: string;
  index: number;
}

export const Character= ({ name, index }: CharacterProps) => {
    const { idCharacter, setIdCharacter } = useCharacterContext();

    return <Container $active={idCharacter == index} onClick={() => setIdCharacter(index)}>{name}</Container>;
};
