import React, { useState, ChangeEvent } from 'react';
import { apiSw } from '../../service/axios';
import { useCharacterContext } from '../../contexts/Characters';

import SearchIcon from '../../assets/icons/search.svg';

import { Container } from './styles';
import { Button } from '../../styles/Button';

export const Search: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const { 
    setCharacters, 
    setLoading, 
    setIdCharacter, 
    setActiveFilter,
    setPage } = useCharacterContext();

  const search = async () => {
    setCharacters([]);
    setLoading(true);
    setPage(2);

    try {
      const { data } = await apiSw.get(`/people${name ? `/?search=${name}` : ''}`);

      setCharacters(data.results);
      setIdCharacter(0);

      setActiveFilter(name ? true : false)
    } catch (error) {
      console.error('Error when searching for character: ', error);
    } finally {
      setLoading(false);
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
        onChange={handleInputChange}
      />

      <Button onClick={search}>
        <img src={SearchIcon} alt="SearchIcon" />
      </Button>
    </Container>
  );
};
