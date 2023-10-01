import Anew from '../assets/films/ANewHope.jpg'
import TheEmpire from '../assets/films/TheEmpire.jpg'
import ReturnJedi from '../assets/films/ReturnJedi.jpg'
import ThePhanton from '../assets/films/ThePhanton.jpg'
import AttackClones from '../assets/films/AttackClones.jpg'
import Revenge from '../assets/films/Revenge.jpg'

interface DictTypes { 
    [key: string]: { 
        image: string; 
        title: string; 
        year: number
    } 
}

export const filmsProvider = (name: string) => {
    const dict: DictTypes = {
        "https://swapi.dev/api/films/1/": {
            image: Anew,
            title: "A New Hope",
            year: 1977
        },

        "https://swapi.dev/api/films/2/": {
            image: TheEmpire,
            title: "The Empire Strikes Back",
            year: 1980
        },

        "https://swapi.dev/api/films/3/": {
            image: ReturnJedi,
            title: "Return of the Jedi",
            year: 1983
        },

        "https://swapi.dev/api/films/4/": {
            image: ThePhanton,
            title: "The Phantom Menace",
            year: 1999
        },

        "https://swapi.dev/api/films/5/": {
            image: AttackClones,
            title: "Attack of the Clones",
            year: 2002
        },

        "https://swapi.dev/api/films/6/": {
            image: Revenge,
            title: "Revenge of the Sith",
            year: 2005
        }
    };

    return dict[name];
};
