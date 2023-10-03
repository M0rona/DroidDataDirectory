import { useEffect, useState } from 'react';
import { useCharacterContext } from '../../../../contexts/Characters';

interface FixedFiltersProps {
  selected: string;
}

export const FixedFilters = ({ selected }: FixedFiltersProps) => {
  const [options, setOptions] = useState<{ value: string; text: string }[] | null>(null);
  const [optSelected, setOptSelected] = useState<string>("default");

  const { 
    characters, 
    setCharactersFiltred, 
    setIdCharacter,
    setActiveFilter } = useCharacterContext();

  useEffect(() => {
    switch (selected) {
      case 'hair_color':
        setOptions([
          { value: 'n/a', text: 'Without hair' },
          { value: 'blond', text: 'Blond' },
          { value: 'brown', text: 'Brown' },
          { value: 'grey', text: 'Grey' },
          { value: 'black', text: 'Black' },
          { value: 'auburn', text: 'Auburn' },
          { value: 'white', text: 'White' },
        ]);
        break;

      case 'skin_color':
        setOptions([
          { value: 'fair', text: 'Fair' },
          { value: 'gold', text: 'Gold' },
          { value: 'white', text: 'White' },
          { value: 'blue', text: 'Blue' },
          { value: 'light', text: 'Light' },
          { value: 'red', text: 'Red' },
          { value: 'green', text: 'Green' },
          { value: 'pale', text: 'Pale' },
          { value: 'metal', text: 'Metal' },
          { value: 'orange', text: 'Orange' },
          { value: 'yellow', text: 'Yellow' },
        ]);
        break;

      case 'eye_color':
        setOptions([
          { value: 'blue', text: 'Blue' },
          { value: 'yellow', text: 'Yellow' },
          { value: 'red', text: 'Red' },
          { value: 'blue-gray', text: 'Blue grey' },
          { value: 'black', text: 'Black' },
          { value: 'orange', text: 'Orange' },
          { value: 'hazel', text: 'Hazel' },
        ]);
        break;

      case 'gender':
        setOptions([
          { value: 'n/a', text: 'No gender' },
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' },
          { value: 'hermaphrodite', text: 'Hermaphrodite' },
        ]);
        break;
    }
  }, [selected]);

  useEffect(() => {
    if (optSelected !== "default") {
      setCharactersFiltred(characters.filter(character => {
        const v = character[selected];
        
        return selected != 'gender' ? v.includes(optSelected) : v === optSelected;
      }));

      setActiveFilter(true)
      setIdCharacter(0);
    }
  }, [optSelected]);

  return (
    <>
      <label htmlFor="operator">Being</label>
      <select
        name="fixedFilters"
        value={optSelected}
        onChange={(e) => setOptSelected(e.target.value)}
      >
        <option value="default" disabled>Select an option</option>
        {options && options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </>
  );
};
