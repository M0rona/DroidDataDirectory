import Luke from '../assets/characters/Luke.jpg';
import C3PO from '../assets/characters/C3PO.jpg';
import R2D2 from '../assets/characters/R2D2.jpg';
import Darth from '../assets/characters/Darth.jpeg';
import Leia from '../assets/characters/Leia.jpeg';
import Owen from '../assets/characters/Owen.jpg';
import Beru from '../assets/characters/Beru.jpg';
import R5D4 from '../assets/characters/R5D4.webp';
import Biggs from '../assets/characters/Biggs.webp';
import ObiWan from '../assets/characters/ObiWan.jpg';
import Anakin from '../assets/characters/Anakin.jpg';
import Tarkin from '../assets/characters/Tarkin.jpeg';
import Chewbacca from '../assets/characters/Chewbacca.jpeg';
import Han from '../assets/characters/Han.jpeg';
import Greedo from '../assets/characters/Greedo.jpg';
import Jabba from '../assets/characters/Jabba.jpg';
import Wedge from '../assets/characters/Wedge.jpg';
import Porkins from '../assets/characters/Porkins.jpg';
import Yoda from '../assets/characters/Yoda.webp';
import Palpatine from '../assets/characters/Palpatine.jpg';
import QuiGon from '../assets/characters/QuiGon.jpg';
import Nute from '../assets/characters/Nute.jpeg';
import Valorum from '../assets/characters/Valorum.jpeg';
import Padme from '../assets/characters/Padme.webp';
import JarJar from '../assets/characters/JarJar.png';
import Roos from '../assets/characters/Roos.webp';
import Rugor from '../assets/characters/Rugor.jpeg';
import Ric from '../assets/characters/Ric.webp';
import Watto from '../assets/characters/Watto.webp';
import Sebulba from '../assets/characters/Sebulba.jpeg';
import Panaka from '../assets/characters/Panaka.webp';
import Shmi from '../assets/characters/Shmi.jpeg';
import DarthMaul from '../assets/characters/DarthMaul.jpeg';
import Bib from '../assets/characters/Bib.webp';
import Ayla from '../assets/characters/Ayla.jpg';
import Ratts from '../assets/characters/Ratts.jpeg';
import Dud from '../assets/characters/Dud.webp';
import Gasgano from '../assets/characters/Gasgano.jpeg';
import BenQuadinaros from '../assets/characters/BenQuadinaros.jpeg';
import Mace from '../assets/characters/Mace.jpeg';
import KiAdiMundi from '../assets/characters/KiAdiMundi.jpeg';
import KitFisto from '../assets/characters/KitFisto.jpeg'; 
import EethKoth from '../assets/characters/EethKoth.jpeg'; 
import AdiGallia from '../assets/characters/AdiGallia.jpeg'; 
import SaeseeTiin from '../assets/characters/SaeseeTiin.jpg'; 
import YaraelPoof from '../assets/characters/YaraelPoof.jpg'; 
import PloKoon from '../assets/characters/PloKoon.jpeg'; 
import MasAmedda from '../assets/characters/MasAmedda.jpg'; 
import GregarTypho from '../assets/characters/GregarTypho.jpeg'; 
import Corde from '../assets/characters/Corde.png'; 
import Cliegg from '../assets/characters/Cliegg.jpeg'; 
import Poggle from '../assets/characters/Poggle.jpeg'; 
import Luminara from '../assets/characters/Luminara.jpeg'; 
import Barriss from '../assets/characters/Barriss.jpg'; 
import Dorme from '../assets/characters/Dorme.jpeg'; 
import Dooku from '../assets/characters/Dooku.jpeg'; 
import BailOrgana from '../assets/characters/BailOrgana.webp'; 
import JangoFett from '../assets/characters/JangoFett.webp'; 
import ZamWesell from '../assets/characters/ZamWesell.jpeg'; 
import Dexter from '../assets/characters/Dexter.jpeg'; 
import LamaSu from '../assets/characters/LamaSu.jpg'; 
import TaunWe from '../assets/characters/TaunWe.jpeg'; 
import JocastaNu from '../assets/characters/JocastaNu.jpeg'; 
import R4P17 from '../assets/characters/R4P17.jpeg'; 
import WatTambor from '../assets/characters/WatTambor.jpeg'; 
import SanHill from '../assets/characters/SanHill.jpeg'; 
import ShaakTi from '../assets/characters/ShaakTi.jpeg'; 
import Grievous from '../assets/characters/Grievous.jpeg'; 
import Tarfful from '../assets/characters/Tarfful.jpeg'; 
import Raymus from '../assets/characters/Raymus.jpeg'; 
import SlyMoore from '../assets/characters/SlyMoore.jpeg'; 
import TionMedon from '../assets/characters/TionMedon.jpeg'; 
import Fett from '../assets/characters/Fett.jpg'; 
import IG88 from '../assets/characters/IG88.jpeg'; 
import Bossk from '../assets/characters/Bossk.jpg'; 
import Lando from '../assets/characters/Lando.webp'; 
import Lobot from '../assets/characters/Lobot.jpeg'; 
import Ackbar from '../assets/characters/Ackbar.jpeg'; 
import Mon from '../assets/characters/Mon.jpg'; 
import Arvel from '../assets/characters/Arvel.webp'; 
import Wicket from '../assets/characters/Wicket.webp'; 
import Nien from '../assets/characters/Nien.png'; 

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
        },

        "C-3PO": {
            image: C3PO,
            description: `C-3PO, often simply referred to as Threepio, is a protocol droid created by Anakin Skywalker. With a wealth of 
            knowledge in etiquette, languages, and protocol, C-3PO serves as a valuable companion to the Rebel Alliance. His fluent communication 
            in over six million forms of language often proves to be an asset in navigating the diverse cultures of the galaxy. C-3PO is known 
            for his meticulous and sometimes worrisome personality, which provides moments of comic relief throughout the saga.`,
        },

        "R2-D2": {
            image: R2D2,
            description: `R2-D2, or Artoo, is an astromech droid known for his resourcefulness and bravery. He is a vital member of the Rebel Alliance,
             often accompanying Luke Skywalker and Princess Leia on their missions. R2-D2's many tools and gadgets, as well as his ability to interface 
             with various computer systems, make him indispensable in critical situations. Despite his lack of speech, R2-D2's loyalty and unwavering commitment 
             to the cause make him a beloved character in the Star Wars universe.`,
        },

        "Darth Vader": {
            image: Darth,
            description: `Darth Vader, formerly known as Anakin Skywalker, is one of the most iconic and complex characters in Star Wars lore. Anakin starts as 
            a promising Jedi Knight with exceptional abilities in the Force. However, his fear of loss and anger ultimately lead him down a path to the dark side. 
            As Darth Vader, he becomes a formidable Sith Lord and enforcer for Emperor Palpatine. Throughout the original and prequel trilogies, Vader's journey 
            explores themes of redemption, sacrifice, and the enduring bond between a father and son, as he ultimately finds his way back to the light through the 
            actions of his son, Luke Skywalker.`,
        },

        "Leia Organa": {
            image: Leia,
            description: `Princess Leia Organa is a fearless leader and diplomat in the Rebel Alliance. Her unwavering commitment to the fight against the Galactic 
            Empire makes her a symbol of hope in the galaxy. Leia is known for her intelligence, bravery, and leadership skills. She also has a strong connection 
            to the Force, which is revealed later in the saga. As the twin sister of Luke Skywalker, she plays a pivotal role in the ultimate defeat of the Empire 
            and the restoration of peace to the galaxy.`,
        },

        "Owen Lars": {
            image: Owen,
            description: `Owen Lars is a moisture farmer on Tatooine and the uncle of Luke Skywalker. He and his wife, Beru, raise Luke as their own son after 
            the tragic events surrounding Anakin Skywalker's fall to the dark side. Owen is a cautious and protective figure who initially seeks to shield Luke 
            from his true heritage and the dangers of the galaxy. Despite his reservations, he cares deeply for Luke's well-being.`,
        },

        "Beru Whitesun lars": {
            image: Beru,
            description: `Beru Whitesun Lars is Owen Lars' wife and Luke Skywalker's aunt. She shares Owen's commitment to raising Luke and keeping him safe 
            on the harsh desert planet of Tatooine. Beru is a caring and nurturing presence in Luke's life, providing love and support as he grows up.`,
        },

        "R5-D4": {
            image: R5D4,
            description: `R5-D4, often referred to as Red, is an astromech droid briefly featured in "Star Wars: Episode IV - A New Hope." While he appears 
            for only a short time, R5-D4 plays a crucial role in the story. He malfunctions, leading to the selection of R2-D2 as the droid to carry Princess 
            Leia's message and set the events of the original trilogy in motion.`,
        },

        "Biggs Darklighter": {
            image: Biggs,
            description: `Biggs Darklighter is a childhood friend of Luke Skywalker who plays a significant role in the Rebel Alliance's efforts against 
            the Galactic Empire. Biggs dreams of joining the Rebel Alliance and becomes a pilot, eventually reuniting with Luke on the Rebel base on Yavin 4.
            His character adds depth to Luke's journey and highlights the personal sacrifices made by those who choose to fight against the Empire.`,
        },

        "Obi-Wan Kenobi": {
            image: ObiWan,
            description: `Obi-Wan Kenobi, also known as Ben Kenobi, is a venerable Jedi Knight who served as a mentor to both Anakin and Luke Skywalker. 
            He possesses great wisdom and proficiency in the Force, making him a central figure in the Star Wars saga. Obi-Wan's guidance and teachings shape 
            the destinies of both Skywalkers, and he is a key player in the fight against the Sith and the Empire.`,
        },

        "Anakin Skywalker": {
            image: Anakin,
            description: `Anakin Skywalker's journey is a tragic and central narrative in the Star Wars saga. As a young slave on Tatooine, he displays 
            extraordinary Force sensitivity and piloting skills. Discovered by Qui-Gon Jinn, Anakin becomes a Jedi Knight with incredible potential. However, 
            his fear of losing loved ones and his attachment to Padmé Amidala ultimately lead him to the dark side, where he becomes the formidable Sith Lord 
            known as Darth Vader. Anakin's redemption becomes a central theme of the series as his son, Luke, strives to save him from the clutches of the dark side.`,
        },

        "Wilhuff Tarkin": {
            image: Tarkin,
            description: `Wilhuff Tarkin is a high-ranking officer in the Galactic Empire known for his ruthless tactics and unwavering loyalty to Emperor Palpatine. 
            As the commander of the Death Star, Tarkin plays a critical role in the Empire's efforts to crush the Rebel Alliance. His willingness to use the Death 
            Star's destructive power on Alderaan demonstrates his commitment to maintaining Imperial control through fear and intimidation.`,
        },

        "Chewbacca": {
            image: Chewbacca,
            description: `Chewbacca, affectionately known as Chewie, is a Wookiee from the planet Kashyyyk and a loyal friend and co-pilot of the 
            Millennium Falcon alongside Han Solo. Chewbacca is known for his incredible strength, bravery, and skill as a mechanic. He is also one 
            of the last remaining members of the Wookiee species after the devastation of his homeworld by the Empire.`,
        },

        "Han Solo": {
            image: Han,
            description: `Han Solo is a charismatic and roguish smuggler who becomes an unexpected hero in the Rebel Alliance's fight 
            against the Galactic Empire. He is the captain of the Millennium Falcon and is known for his quick wit, piloting skills, and 
            charming personality. Han's journey from a self-serving smuggler to a selfless hero is a central arc in the original trilogy.`,
        },

        "Greedo": {
            image: Greedo,
            description: `Greedo is a Rodian bounty hunter who crosses paths with Han Solo in the Mos Eisley Cantina on Tatooine.
            The encounter between Greedo and Han leads to a famous and contentious showdown. Greedo's presence underscores the dangerous 
            and morally ambiguous nature of the galaxy's underworld.`,
        },

        "Jabba Desilijic Tiure": {
            image: Jabba,
            description: `Jabba Desilijic Tiure, commonly known as Jabba the Hutt, is a notorious Hutt crime lord and gangster. 
            He resides on the desert planet Tatooine and controls a vast criminal empire. Jabba is known for his grotesque appearance 
            and penchant for enslaving individuals, including Princess Leia. His palace becomes a central location in "Star Wars: Episode VI - 
            Return of the Jedi."`,
        },

        "Wedge Antilles": {
            image: Wedge,
            description: `Wedge Antilles is a skilled Rebel pilot who plays a significant role in the Rebel Alliance's battles 
            against the Empire. He is known for his courage, loyalty, and exceptional piloting abilities. Wedge's character highlights 
            the importance of the Rebel pilots in the Galactic Civil War.`,
        },

        "Jek Tono Porkins": {
            image: Porkins,
            description: `Jek Tono Porkins is a Rebel pilot who participates in the Battle of Yavin. His character is memorable for his unfortunate 
            fate during the battle, emphasizing the sacrifices made by Rebel forces in their fight against the Empire.`,
        },

        "Yoda": {
            image: Yoda,
            description: `Yoda is a legendary Jedi Master known for his incredible wisdom, mastery of the Force, and distinctive 
            speech pattern. He is one of the oldest and most powerful Jedi in the Star Wars universe. Yoda serves as a mentor to several 
            generations of Jedi, including Luke Skywalker. His teachings and guidance play a crucial role in the training of Jedi and the 
            ultimate defeat of the Sith.`,
        },

        "Palpatine": {
            image: Palpatine,
            description: `Palpatine, also known as Darth Sidious, is a Sith Lord and mastermind behind the rise of the Galactic Empire. 
            He manipulates the political landscape of the Republic, ultimately becoming Emperor. Palpatine seeks to eradicate the Jedi Order 
            and solidify his tyrannical rule. His cunning and mastery of the dark side of the Force make him a formidable antagonist 
            throughout the Star Wars saga.`,
        },

        "Qui-Gon Jinn": {
            image: QuiGon,
            description: `Qui-Gon Jinn is a Jedi Master known for his unorthodox approach to the Force and his unwavering belief in the prophecy 
            of the Chosen One. He discovers Anakin Skywalker on Tatooine and believes that Anakin is the one destined to bring balance to the Force. 
            Qui-Gon's character introduces key elements of Jedi philosophy and sets the stage for Anakin's journey.`,
        },

        "Nute Gunray": {
            image: Nute,
            description: `Nute Gunray is a Neimoidian and a significant figure in the Trade Federation. He is involved in various 
            schemes and conflicts, including the blockade of Naboo and the Clone Wars. Gunray's character represents corporate interests 
            and political manipulation within the galaxy.`,
        },

        "Finis Valorum": {
            image: Valorum,
            description: `Finis Valorum is a politician who serves as Chancellor of the Galactic Republic before the rise of Emperor 
            Palpatine. His tenure is marked by political turmoil and corruption within the Senate. Valorum's inability to address these 
            issues contributes to the Republic's decline and the eventual rise of the Sith.`,
        },

        "Padmé Amidala": {
            image: Padme,
            description: `Padmé Amidala is a skilled politician and leader from the planet Naboo. She becomes Queen of Naboo and later serves 
            as a senator in the Galactic Republic. Padmé is known for her dedication to diplomacy and her commitment to fighting for justice. 
            Her character is central to the events leading up to the Clone Wars and the rise of the Empire.`,
        },

        "Jar Jar Binks": {
            image: JarJar,
            description: `Jar Jar Binks is a Gungan from the planet Naboo. Despite his clumsy and unconventional behavior, he plays an 
            unexpected role in the fight against the Trade Federation and the Sith. Jar Jar's character adds a unique and humorous element 
            to the Star Wars universe.`,
        },

        "Roos Tarpals": {
            image: Roos,
            description: `Roos Tarpals is a Gungan warrior who fights alongside Jar Jar Binks and other Gungans in the Battle of Naboo. 
            He is a courageous and loyal defender of his people.`,
        },

        "Rugor Nass": {
            image: Rugor,
            description: `Rugor Nass is a Gungan leader who appears in "Star Wars: Episode I - The Phantom Menace." He plays a 
            role in the negotiations between the Gungans and the Naboo and later aids in the battle against the Trade Federation.`,
        },

        "Ric Olié": {
            image: Ric,
            description: `Ric Olié is a skilled pilot who flies for Queen Amidala of Naboo. He is known for his expertise in 
            navigating starships, including the Queen's royal starship during her diplomatic missions.`,
        },

        "Watto": {
            image: Watto,
            description: `Watto is a Toydarian junk dealer and slave owner on Tatooine. He is known for his shrewd business dealings 
            and his ownership of Anakin Skywalker and his mother, Shmi. Watto's character reflects the economic disparities within the galaxy.`,
        },

        "Sebulba": {
            image: Sebulba,
            description: `Sebulba is a Dug podracer in "Star Wars: Episode I - The Phantom Menace." He is known for his 
            aggressive racing style and his rivalry with Anakin Skywalker during the Boonta Eve Classic.`,
        },

        "Quarsh Panaka": {
            image: Panaka,
            description: `Quarsh Panaka is the captain of Queen Amidala's security forces on Naboo. He is dedicated to 
            protecting the queen and her people from external threats.`,
        },

        "Shmi Skywalker": {
            image: Shmi,
            description: `Shmi Skywalker is Anakin Skywalker's mother. She is a kind and loving figure in Anakin's life, 
            and her tragic separation from her son is a significant part of Anakin's backstory.`,
        },

        "Darth Maul": {
            image: DarthMaul,
            description: `Darth Maul is a Sith Lord known for his menacing appearance and double-bladed lightsaber. 
            He serves as Darth Sidious' apprentice and is a skilled and deadly adversary. Maul's return in the animated series adds depth to his character.`,
        },

        "Bib Fortuna": {
            image: Bib,
            description: `Bib Fortuna is a Twi'lek major domo and the right-hand man to Jabba the Hutt. He is a key figure in 
            Jabba's criminal empire, overseeing various aspects of the criminal organization.`,
        },

        "Ayla Secura": {
            image: Ayla,
            description: `Ayla Secura is a Twi'lek Jedi Master known for her skills in lightsaber combat. She is a 
            member of the Jedi Order and plays a role in the Clone Wars.`,
        },

        "Ratts Tyerel": {
            image: Ratts,
            description: `Ratts Tyerel is a podracer in "Star Wars: Episode I - The Phantom Menace." He is known 
            for his participation in the Boonta Eve Classic podracing event on Tatooine.`,
        },

        "Dud Bolt": {
            image: Dud,
            description: `Dud Bolt is another podracer in "Star Wars: Episode I - The Phantom Menace." He is known 
            for his distinctive appearance and racing skills.`,
        },

        "Gasgano": {
            image: Gasgano,
            description: `Gasgano is a podracer in "Star Wars: Episode I - The Phantom Menace." He competes in the 
            Boonta Eve Classic and is recognized for his pod's unique design.`,
        },

        "Ben Quadinaros": {
            image: BenQuadinaros,
            description: `Ben Quadinaros is yet another podracer in "Star Wars: Episode I - The Phantom Menace." 
            He is known for his unique and somewhat unstable pod design.`,
        },

        "Mace Windu": {
            image: Mace,
            description: `Mace Windu is a Jedi Master known for his mastery of the lightsaber and his leadership within the 
            Jedi Order. He is portrayed by Samuel L. Jackson in the prequel trilogy and plays a significant role in the Clone Wars.`,
        },

        "Ki-Adi-Mundi": {
            image: KiAdiMundi,
            description: `Ki-Adi-Mundi is a Cerean Jedi Master with a distinctive conical head. He is a member of the 
            Jedi Council and contributes to key decisions within the Order.`,
        },

        "Kit Fisto": {
            image: KitFisto,
            description: `Kit Fisto is a Nautolan Jedi Master with exceptional lightsaber skills. He is known for his 
            underwater combat abilities and serves on the Jedi Council.`,
        },

        "Eeth Koth": {
            image: EethKoth,
            description: `Eeth Koth is a Zabrak Jedi Master who serves on the Jedi Council. He is skilled in lightsaber 
            combat and contributes to the Order's decision-making process.`,
        },

        "Adi Gallia": {
            image: AdiGallia,
            description: `Adi Gallia is a Tholothian Jedi Master known for her skills with a lightsaber. She serves on 
            the Jedi Council and participates in critical missions.`,
        },

        "Saesee Tiin": {
            image: SaeseeTiin,
            description: `Saesee Tiin is an Iktotchi Jedi Master known for his distinctive horns. He is a member of the 
            Jedi Council and contributes to the Order's leadership.`,
        },

        "Yarael Poof": {
            image: YaraelPoof,
            description: `Yarael Poof is a Quermian Jedi Master known for his long neck and wise demeanor. He is a member 
            of the Jedi Council and provides insight into Jedi matters.`,
        },

        "Plo Koon": {
            image: PloKoon,
            description: `Plo Koon is a Kel Dor Jedi Master known for his unique breathing apparatus. He is a member of 
            the Jedi Council and contributes to the Order's decisions.`,
        },

        "Mas Amedda": {
            image: MasAmedda,
            description: `Mas Amedda is a Chagrian who serves as the Vice Chair of the Galactic Senate during Palpatine's 
            chancellorship. He is a key figure in the political machinations of the Republic.`,
        },

        "Gregar Typho": {
            image: GregarTypho,
            description: `Gregar Typho is a captain in the Royal Naboo Security Forces and serves as Queen Padmé Amidala's 
            security detail. His dedication to protecting Padmé is unwavering.`,
        },

        "Cordé": {
            image: Corde,
            description: `Cordé is a loyal handmaiden and decoy who serves as a body double for Queen Padmé Amidala. Her 
            role is critical in ensuring the queen's safety.`,
        },

        "Cliegg Lars": {
            image: Cliegg,
            description: `Cliegg Lars is Owen Lars' father and Anakin Skywalker's stepfather. He appears briefly in 
            "Star Wars: Episode II - Attack of the Clones" and is portrayed as a caring figure.`,
        },

        "Poggle the Lesser": {
            image: Poggle,
            description: `Poggle the Lesser is the Archduke of Geonosis and a key figure in the Separatist movement. 
            He plays a role in the creation of the Confederacy of Independent Systems and the production of battle droids.`,
        },

        "Luminara Unduli": {
            image: Luminara,
            description: `Luminara Unduli is a Mirialan Jedi Master known for her green lightsaber. She is a 
            member of the Jedi Council and a guardian of Jedi knowledge.`,
        },

        "Barriss Offee": {
            image: Barriss,
            description: `Barriss Offee is a Mirialan Jedi Knight and apprentice to Luminara Unduli. She appears 
            in the prequel trilogy and plays a role in Clone Wars battles.`,
        },

        "Dormé": {
            image: Dorme,
            description: `Dormé is a handmaiden and loyal servant to Padmé Amidala. She appears in "Star Wars: 
            Episode II - Attack of the Clones" and plays a supporting role in Amidala's life.`,
        },

        "Dooku": {
            image: Dooku,
            description: `Count Dooku, also known as Darth Tyranus, is a former Jedi Master who becomes a Sith 
            Lord and leader of the Separatist movement. His actions and manipulations contribute to the Clone Wars and the rise of the Sith.`,
        },

        "Bail Prestor Organa": {
            image: BailOrgana,
            description: `Bail Prestor Organa is a senator from Alderaan and a key figure in the Rebel Alliance. 
            He is the adoptive father of Princess Leia and a dedicated advocate for justice and freedom.`,
        },

        "Jango Fett": {
            image: JangoFett,
            description: `Jango Fett is a skilled bounty hunter known for his Mandalorian armor and his connection 
            to the creation of the Clone Army. He is the genetic template for the clone troopers.`,
        },

        "Zam Wesell": {
            image: ZamWesell,
            description: `Zam Wesell is a shape-shifting bounty hunter who attempts to assassinate Padmé Amidala in 
            "Star Wars: Episode II - Attack of the Clones." Her role sets off a chain of events in the prequel trilogy.`,
        },

        "Dexter Jettster": {
            image: Dexter,
            description: `Dexter Jettster is a Besalisk who runs a diner on Coruscant. He is known for his expertise 
            in cooking and knowledge about the galaxy's history and cuisine.`,
        },

        "Lama Su": {
            image: LamaSu,
            description: `Lama Su is a Kaminoan who oversees the cloning facilities on the planet Kamino. He plays a 
            key role in the creation of the Clone Army, which becomes a central element in the Clone Wars.`,
        },

        "Taun We": {
            image: TaunWe,
            description: `Taun We is a Kaminoan who assists in the cloning process and welcomes Obi-Wan Kenobi to 
            Kamino in "Star Wars: Episode II - Attack of the Clones." She provides critical information about the clones.`,
        },

        "Jocasta Nu": {
            image: JocastaNu,
            description: `Jocasta Nu is a human Jedi Master and the Chief Librarian of the Jedi Archives. 
            She is a guardian of Jedi knowledge and plays a role in preserving the Order's history.`,
        },

        "R4-P17": {
            image: R4P17,
            description: `R4-P17 is an astromech droid that accompanies Obi-Wan Kenobi during the Clone Wars. 
            The droid assists in various missions and battles, providing technical support.`,
        },

        "Wat Tambor": {
            image: WatTambor,
            description: `Wat Tambor is a Skakoan and a member of the Techno Union. He is involved in the production 
            of battle droids and advanced technology for the Separatists.`,
        },

        "San Hill": {
            image: SanHill,
            description: `San Hill is a Muun and the Chairman of the InterGalactic Banking Clan. He supports the 
            Separatist cause financially and plays a role in the economic aspects of the Clone Wars.`,
        },

        "Shaak Ti": {
            image: ShaakTi,
            description: `Shaak Ti is a Togruta Jedi Master known for her proficiency in lightsaber combat. 
            She is a member of the Jedi Council and contributes to Jedi leadership during the Clone Wars.`,
        },

        "Grievous": {
            image: Grievous,
            description: `General Grievous is a cyborg warrior and commander of the Separatist Droid Army. 
            He is known for collecting lightsabers as trophies from defeated Jedi and is a formidable adversary in the Clone Wars.`,
        },

        "Tarfful": {
            image: Tarfful,
            description: `Tarfful is a Wookiee chieftain on Kashyyyk and a loyal ally of the Jedi during 
            the Clone Wars. He fights alongside Yoda during the battle to defend his homeworld.`,
        },

        "Raymus Antilles": {
            image: Raymus,
            description: `Raymus Antilles is the captain of the Tantive IV, the Rebel ship captured 
            by Darth Vader at the beginning of "Star Wars: Episode IV - A New Hope." His actions are instrumental in 
            ensuring the plans for the Death Star reach Princess Leia and the Rebel Alliance.`,
        },

        "Sly Moore": {
            image: SlyMoore,
            description: `Sly Moore is a Umbaran and a close aide to Emperor Palpatine. 
            She appears in the prequel trilogy and is often seen in the Emperor's presence, contributing to his political maneuvers.`,
        },

        "Tion Medon": {
            image: TionMedon,
            description: `Tion Medon is the Port Administrator of Pau City on the planet 
            Utapau. He encounters Obi-Wan Kenobi during the Clone Wars and provides information about General Grievous' presence on the planet.`,
        },

        "Boba Fett": {
            image: Fett,
            description: `Boba Fett is a renowned bounty hunter in the Star Wars universe. He wears distinctive Mandalorian armor, is highly 
            skilled in combat and weaponry, and operates with a mysterious and stoic demeanor. Despite limited screen time, he's a beloved 
            character known for his efficiency and coolness.`,
        },

        "IG-88": {
            image: IG88,
            description: `IG-88 is a fearsome assassin droid in Star Wars, designed for hunting and terminating targets with ruthless efficiency. 
            Its cold, emotionless nature and deadly weaponry make it a formidable adversary in the galaxy.`,
        },

        "Bossk": {
            image: Bossk,
            description: `Bossk is a reptilian bounty hunter in Star Wars known for his expertise in tracking and capturing targets. 
            His scaly appearance, strength, and ruthless determination make him a formidable and memorable character in the galaxy's criminal underworld.`,
        },

        "Lando Calrissian": {
            image: Lando,
            description: `Lando Calrissian is a suave and charismatic gambler, entrepreneur, and former owner of the Millennium Falcon. He plays a crucial 
            role in the Rebel Alliance's efforts against the Galactic Empire. Lando's loyalty and resourcefulness make him a valuable ally in the fight for freedom.`,
        },

        "Lobot": {
            image: Lobot,
            description: `Lobot is a human cyborg and the chief administrative aide to Lando Calrissian on Cloud City. He is known for his cybernetic implants 
            that enhance his mental abilities and his unwavering loyalty to Lando.`,
        },

        "Ackbar": {
            image: Ackbar,
            description: `Admiral Ackbar is a Mon Calamari military commander known for his iconic line, "It's a trap!" He is a skilled tactician and leader 
            in the Rebel Alliance and later the New Republic. Ackbar's strategic expertise is vital in the battles against the Empire.`,
        },

        "Mon Mothma": {
            image: Mon,
            description: `Mon Mothma is a leader of the Rebel Alliance and later the New Republic. She is a skilled diplomat and politician who plays a key 
            role in uniting various factions against the Empire and establishing a democratic government.`,
        },

        "Arvel Crynyd": {
            image: Arvel,
            description: `Arvel Crynyd, also known as "Green Leader," is a pilot in the Rebel Alliance. He sacrifices his life in a heroic kamikaze attack 
            on the Imperial Super Star Destroyer Executor during the Battle of Endor.`,
        },

        "Wicket Systri Warrick": {
            image: Wicket,
            description: `Wicket W. Warrick is an Ewok from the forest moon of Endor. He befriends Princess Leia and helps the Rebel Alliance in the Battle 
            of Endor. Wicket's bravery and resourcefulness are essential to the victory over the Empire.`,
        },

        "Nien Nunb": {
            image: Nien,
            description: `Nien Nunb is a Sullustan co-pilot who assists Lando Calrissian during the Battle of Endor. He is known for his distinctive appearance 
            and his role in the destruction of the second Death Star.`,
        },
    };

    return dict[name] ? dict[name] : {image: null, description: null};
};
