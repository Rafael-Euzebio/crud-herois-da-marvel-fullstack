const marvelHeroes  = [
  {
    name: "Spider-Man",
    abilities: [
      "Agilidade Aprimorada",
      "Força Aprimorada",
      "Escalar Paredes",
      "Sentido Aranha",
      "Disparar Teia",
    ],
    origins: "",
  },
  {
    name: "Iron Man",
    abilities: [
      "Genialidade",
      "Voo",
      "Rajadas Repulsoras",
    ],
    origins: "",
  },
  {
    name: "Capitão América",
    abilities: [
      "Força Aprimorada",
      "Agilidade Aprimorada",
      "Artes Marciais",
      "Escudo de Vibranium",
      "Genialidade Tática"
    ],
    origins: "",
  },
  {
    name: "Thor",
    abilities: [
      "Força Aprimorada",
      "Controle da Eletricidade",
      "Voo",
      "Encantamento",
      "Longevidade"
    ],
    origins: "",
  },
  {
    name: "Hulk",
    abilities: [
      "Força Sobre-Humana",
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
      "Mestre em Armas Brancas",
    ],
    origins: "",
  },
];

const abilitiesSet = new Set<string>()

for (const hero of marvelHeroes) {
  const abilities = hero.abilities;
  abilities.forEach(ability => abilitiesSet.add(ability));
}

const abilities: string[] = Array.from(abilitiesSet).sort()

export { abilities }

