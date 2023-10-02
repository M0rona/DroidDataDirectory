import { useEffect, useRef } from 'react';

import { AdvancedFilter } from '../../../components/AdvancedFilter'
import { useCharacterContext } from '../../../contexts/Characters';
import { Search } from '../../../components/Search';
import { Character } from '../../../components/Character';
import { Skeleton } from '../../../components/Skeleton';

import * as Styled from './styles'


export const SectionCharacters = () => {
  const charactersList = useRef<HTMLUListElement | null>(null);

  const {
      characters,
      charactersFiltred,
      page,
      loading,
      setLoading,
      getCharacters,
      activeFilter
  } = useCharacterContext();

  useEffect(() => {
    getCharacters(true);
  }, [])

  useEffect(() => {
    if(!loading && charactersList.current && page != null && !activeFilter) {
      const intObserver = new IntersectionObserver((entries) => {
        if(entries.some((entry) => entry.isIntersecting)) {
          getCharacters(false);
          setLoading(true);
        }
      })

      const lastItem = new Array(...charactersList.current.children);

      intObserver.observe(lastItem.pop() as Element);
  
      return () => intObserver.disconnect();
    }
  }, [loading, activeFilter])

  return (
    <>
        <Styled.Header $space={true} >
            <h1>Characters</h1>

            <AdvancedFilter />
        </Styled.Header>

        <Search />

        <Styled.Characters ref={charactersList}>
          { (charactersFiltred?.length ? charactersFiltred : characters ).map((personagem, index) => (
              <Character 
                  key={personagem.name} 
                  name={personagem.name}
                  index={index}
              />
          )) }

          {(loading && charactersFiltred.length == 0) && <Skeleton height="60px" repeat={9} />}
        </Styled.Characters>
    </>
  )
}
