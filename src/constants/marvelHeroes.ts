interface MarvelHero {
  name: string;
  abilities: string[];
}

interface MarvelHeroes {
  [key: string]: MarvelHero
}
const marvelHeroes: MarvelHeroes  = {
  SpiderMan: {
    name: "Spider-Man",
    abilities: [
      "Agilidade Aprimorada",
      "Força Aprimorada",
      "Escalar Paredes",
      "Sentido Aranha",
      "Disparar Teia",
    ]
  },
  IronMan: {
    name: "Iron Man",
    abilities: [
      "Genialidade",
      "Voo",
      "Rajadas Repulsoras",
    ]
  },
  CaptainAmerica: {
    name: "Capitão América",
    abilities: [
      "Força Aprimorada",
      "Agilidade Aprimorada",
      "Artes Marciais",
      "Escudo de Vibranium",
      "Genialidade Tática"
    ]
  },
  Thor: {
    name: "Thor",
    abilities: [
      "Força Aprimorada",
      "Controle da Eletricidade",
      "Voo",
      "Encantamento",
      "Longevidade"
    ]
  },
  Hulk: {
    name: "Hulk",
    abilities: [
      "Força Sobre-Humana",
      "Genialidade",
      "Cura Regenerativa",
      "Durabilidade Sobre-Humana",
      "Imunidade à Radiação"
    ]
  },
  BlackWidow: {
    name: "Viúva Negra",
    abilities: [
      "Agilidade Aprimorada",
      "Artes Marciais",
      "Mestre em Espionagem",
      "Mestre em Assassinato"
    ]
  },
  DoctorStrange: {
    name: "Doutor Estranho",
    abilities: [
      "Domínio da Magia",
      "Projeção Astral",
      "Manipulação Temporal",
      "Teletransporte",
      "Viagem Dimensional"
    ]
  },
  BlackPanther: {
    name: "Pantera Negra",
    abilities: [
      "Força Aprimorada",
      "Agilidade Aprimorada",
      "Traje de Vibranium",
      "Especialista Tático",
      "Mestre em Armas Brancas",
    ]
  },
}

const abilitiesSet = new Set<string>()

for (const hero in marvelHeroes) {
  const abilities = marvelHeroes[hero].abilities;
  abilities.forEach(ability => abilitiesSet.add(ability));
}

const abilities: string[] = Array.from(abilitiesSet).sort()

export { abilities }

