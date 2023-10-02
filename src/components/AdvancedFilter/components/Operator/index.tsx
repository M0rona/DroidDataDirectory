import { useState } from 'react';
import { useCharacterContext } from '../../../../contexts/Characters';

interface OperatorProps {
  selected: string;
}

export const Operator = ({ selected }: OperatorProps) => {
  const [operator, setOperator] = useState<string>("equal");
  const [inputValue, setInputValue] = useState<string>("");

  const { 
    characters, 
    setCharactersFiltred, 
    setIdCharacter,
    setActiveFilter } = useCharacterContext();

  const search = () => {
    setCharactersFiltred(characters.filter((character) => {
      const v : number = parseFloat(String(character[selected]));
      const numericInputValue = parseFloat(inputValue);
        setIdCharacter(0);
        
        switch (operator) {
            case "equal":
                return v == numericInputValue
            case "less":
                return v <= numericInputValue
            case "bigger":
                return v >= numericInputValue
            default:
              return false;
        }
    }));

    setActiveFilter(true)
  };
  

  return (
    <>
      <label htmlFor="operator">Sendo</label>
      <select
        name="operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="equal">Equal</option>
        <option value="less">Less or equal</option>
        <option value="bigger">Bigger or equal</option>
      </select>

      <label htmlFor="numberFilter">{operator === "equal" ? "To" : "Than"}</label>
      <input
        type="number"
        name="numberFilter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Only integers!"
      />

      <button onClick={search}>Filter</button>
    </>
  );
};
