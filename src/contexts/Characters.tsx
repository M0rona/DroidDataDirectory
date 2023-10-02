import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { apiSw } from "../service/axios";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  [key: string]: string | string[];
}

interface CharacterContextType {
  characters: Character[];
  charactersFiltred: Character[];
  idCharacter: number;
  loading: boolean;
  page: number | null;
  activeFilter: boolean;
  windowWidth: number;
  isMobile: boolean;
  setCharacters: (characters: Character[]) => void;
  setCharactersFiltred: (charactersFiltred: Character[]) => void;
  setIdCharacter: (setIdCharacter: number) => void;
  setLoading: (loading: boolean) => void;
  setActiveFilter: (activeFilter: boolean) => void;
  getCharacters: (firstLoading: boolean) => Promise<void>;
  setWindowWidth: (windowWidth: number) => void;
  setIsMobile: (isMobile: boolean) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersFiltred, setCharactersFiltred] = useState<Character[]>([]);
  const [activeFilter, setActiveFilter] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number | null>(1);
  const [idCharacter, setIdCharacter] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getCharacters = async (firstLoading: boolean): Promise<void> => {
    try {
      const { data } = await apiSw.get(`/people?page=${page}`);

      setCharacters((currentCharacters) =>
        firstLoading ? data.results : [...currentCharacters, ...data.results]
      );

      data.next ? setPage((currentPage) => currentPage && currentPage + 1) : setPage(null);
    } catch (error) {
      console.error("Error inserting characters: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        charactersFiltred,
        idCharacter,
        loading,
        page,
        activeFilter,
        windowWidth,
        isMobile,
        setCharacters,
        setCharactersFiltred,
        setIdCharacter,
        setLoading,
        setActiveFilter,
        getCharacters,
        setWindowWidth,
        setIsMobile
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return context;
};
