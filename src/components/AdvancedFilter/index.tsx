import { useState } from 'react';
import { useCharacterContext } from '../../contexts/Characters';

import { Operator } from './components/Operator';
import { FixedFilters } from './components/FixedFilters';

import Filter from '../../assets/icons/filter.svg';
import clearFilter from '../../assets/icons/clearFilter.svg';
import { Button } from '../../styles/Button';

import * as Styled from './styles';

export const AdvancedFilter = () => {
  const [selected, setSelected] = useState<string>("default");

  const { 
    activeFilter, 
    setActiveFilter, 
    charactersFiltred, 
    setCharactersFiltred 
  } = useCharacterContext();

  const handleClickFilter = () => {
    if (!activeFilter && charactersFiltred?.length) {
        setCharactersFiltred([]);
        setSelected("default");

        return;
    }
    setActiveFilter(!activeFilter);
  };

  return (
    <Styled.Container>
      <Button 
        onClick={handleClickFilter} 
        title={!(!activeFilter && charactersFiltred?.length) ? "Filter loaded characters" : "Clear filters"}
      >
        {!(!activeFilter && charactersFiltred?.length) && 
          <img src={Filter} alt="IconFilter"/>
        }
        
        {(!activeFilter && charactersFiltred.length != 0) && 
          <img src={clearFilter} alt="IconClearFilter"/>
        }
      </Button>

      {activeFilter && 
        <Styled.DropDawn>
          <div>
            <h2>Filter characters by: </h2>
            <span title="Only uploaded data will be filtered">!</span>
          </div>
          
          <select name="optionsFilter" value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="default" disabled>Select an option</option>
            <option value="height">Height</option>
            <option value="mass">Mass</option>
            <option value="hair_color">Hair color</option>
            <option value="skin_color">Skin color</option>
            <option value="eye_color">Eye color</option>
            <option value="gender">Gender</option>
          </select>

          {(selected === 'height' || selected === 'mass') && 
            <Operator selected={selected} />
          }

          {(selected === 'hair_color' || 
            selected === 'skin_color' || 
            selected === 'eye_color' || 
            selected === 'gender' ) &&

            <FixedFilters selected={selected} />
          }
        </Styled.DropDawn>
      }
    </Styled.Container>
  );
};
