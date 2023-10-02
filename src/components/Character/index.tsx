import { Container } from "./styles";
import { useCharacterContext } from "../../contexts/Characters";

interface CharacterProps {
  name: string;
  index: number;
}

export const Character= ({ name, index }: CharacterProps) => {
    const { idCharacter, setIdCharacter, setIsMobile } = useCharacterContext();

    const handleClickCharacter = () => {
      setIdCharacter(index);
      setIsMobile(true);
    }

    return <Container $active={idCharacter == index} onClick={handleClickCharacter}>{name}</Container>;
};
