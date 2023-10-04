import React, { useState, ChangeEvent } from 'react';
import { apiSw } from '../../service/axios';
import { useCharacterContext } from '../../contexts/Characters';

import SearchIcon from '../../assets/icons/search.svg';

import { Container } from './styles';
import { Button } from '../../styles/Button';

export const Search: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const { 
    setCharactersFiltred, 
    setLoading, 
    setIdCharacter, 
    setActiveFilter } = useCharacterContext();

  const search = async () => {
    setCharactersFiltred([])
    setLoading(true);

    if(name) {
      setActiveFilter(true);
      
      try {
        const { data } = await apiSw.get(`/people${name ? `/?search=${name}` : ''}`);
  
        setCharactersFiltred(data.results);
        setIdCharacter(0);

      } catch (error) {
        console.error('Error when searching for character: ', error);
      } finally {
        setLoading(false);
      }
    } else {
      setActiveFilter(false)
    }
    
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Search character"
        id="searchInput"
        onChange={handleInputChange}
      />

      <Button onClick={search}>
        <img src={SearchIcon} alt="SearchIcon" />
      </Button>
    </Container>
  );
};
