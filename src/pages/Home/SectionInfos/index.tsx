import { addonsProvider } from '../../../hooks/addonsProvider';
import { useCharacterContext } from '../../../contexts/Characters';
import { InfosSkeleton } from './InfosSkeleton';
import { Films } from '../../../components/Films';

import cake from '../../../assets/icons/cake.svg';
import gender from '../../../assets/icons/gender.svg';
import eye from '../../../assets/icons/eye.svg';

import * as Styled from './styles';


interface Character {
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  films: string[];
}

export const SectionInfos = () => {
  const { 
    characters, 
    charactersFiltred, 
    idCharacter,
    loading } = useCharacterContext();

  const character: Character = (charactersFiltred.length
    ? charactersFiltred
    : characters
    )[idCharacter];

  const { image, description } = addonsProvider(character && character.name);

  return (
    <>
        {(loading && !characters.length) && <InfosSkeleton /> }

        {!(loading && !characters.length) && 
            <>
                <Styled.ImageSection $img={image}>
                    <h1>{character?.name}</h1>
                </Styled.ImageSection>

                <Styled.Infos>
                    <p>{description}</p>

                    <Styled.PersonInfos>
                        <div>
                            <img src={cake} alt="iconCake" />

                            <div>
                                <h3>Birthday year:</h3>
                                <span>{character?.birth_year}</span>
                            </div>
                        </div>

                        <div>
                            <img src={gender} alt="iconGender" height="33px" />

                            <div>
                                <h3>Gender:</h3>
                                <span>{character?.gender}</span>
                            </div>
                        </div>

                        <div>
                            <img src={eye} alt="iconEye" height="33px" />

                            <div>
                                <h3>Eye color:</h3>
                                <span>{character?.eye_color}</span>
                            </div>
                        </div>
                    </Styled.PersonInfos>

                    <Films movies={character?.films} />
                </Styled.Infos>
            </>
        }
    </>
  );
};
