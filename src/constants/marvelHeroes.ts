import HeroInterface from "../interfaces/hero.interface";

const marvelHeroes: HeroInterface[] = [
  {
    name: "Spider-Man",
    abilities: [
      "Agilidade aprimorada",
      "Força aprimorada",
      "Escalar paredes",
      "Sentido aranha",
      "Lançamento de teia",
    ],
    origins: "",
  },
  {
    name: "Iron Man",
    abilities: [
      "Genialidade",
      "Voo",
      "Rajadas repulsoras",
    ],
    origins: "",
  },
  {
    name: "Capitão América",
    abilities: [
      "Força aprimorada",
      "Agilidade aprimorada",
      "Artista marcial especialista",
      "Escudo de vibranium",
      "Gênio tático"
    ],
    origins: "",
  },
  {
    name: "Thor",
    abilities: [
      "Força aprimorada",
      "Geração de eletricidade",
      "Voo",
      "Encantamento",
      "Longevidade"
    ],
    origins: "",
  },
  {
    name: "Hulk",
    abilities: [
      "Força aprimorada",
      "Genialidade",
      "Cura Regenerativa",
      "Durabilidade Sobre-Humana",
      "Imunidade à Radiação"
    ],
    origins: "",
  },
  {
    name: "Viúva Negra",
    abilities: [
      "Agilidade Aprimorada",
      "Artes Marciais",
      "Mestre em Espionagem",
      "Mestre em Assassinato"
    ],
    origins: "",
  },
  {
    name: "Doutor Estranho",
    abilities: [
      "Domínio da Magia",
      "Projeção Astral",
      "Manipulação Temporal",
      "Teletransporte",
      "Viagem Dimensional"
    ],
    origins: "",
  },
  {
    name: "Pantera Negra",
    abilities: [
      "Força Aprimorada",
      "Agilidade Aprimorada",
      "Traje de Vibranium",
      "Especialista Tático",
      "Mestre em Lança",
    ],
    origins: "",
  },
];

const abilitiesSet = new Set<string>()

for (const hero of marvelHeroes) {
  const abilities = hero.abilities;
  abilities.forEach(ability => abilitiesSet.add(ability));
}

const abilities: string[] = Array.from(abilitiesSet)

export { abilities }

