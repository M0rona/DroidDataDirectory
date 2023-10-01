import Luke from '../assets/characters/Luke.jpg';

interface DictTypes { 
    [key: string]: { 
        image: string; 
        description: string; 
    } 
}

export const addonsProvider = (name: string) => {
    const dict: DictTypes = {
        "Luke Skywalker": {
            image: Luke,
            description: `Until then, a young orphan raised by a couple of farmers from Tatooine, Luke discovers 
            his destiny when he crosses paths with the droids C3PO and R2D2. Son of Anakin Skywalker, meets his 
            former master, Obi-Wan, saves Princess Leia (who would later discover to be his sister), destroys the Empire's main weapon, 
            the Death Star, becomes one of the leaders of the Rebel Alliance and finally helps to overthrow Emperor Palpatine. 
            In Episode VII he will be shown as an experienced Jedi master.`
        }
    };

    return dict[name] ? dict[name] : {image: null, description: null};
};
