const Jogos = [
  { 
    id: 1, nome: "The Legend of Zelda: Breath of the Wild", 
    descricao: "Após despertar de um sono profundo e sem memória de seu passado, Link se vê diante de um vasto e perigoso reino de Hyrule. Para deter a ameaça iminente de Calamity Ganon, ele deve explorar florestas, montanhas e ruínas antigas, resolver enigmas e fortalecer-se com armas e habilidades para enfrentar o seu maior desafio.", 
    categoria: "Aventura", ano: 2017, nota: 9.8, 
    imagem: require("../assets/zelda.jpg")
  },
  { 
    id: 2, nome: "Super Mario Odyssey", 
    descricao: "Mario parte em uma jornada pelo mundo para resgatar a princesa Peach, sequestrada mais uma vez por Bowser, que planeja um casamento forçado. Com a ajuda de Cappy, um chapéu mágico que concede habilidades especiais, Mario explora diversos reinos, enfrenta chefões poderosos e coleta luas para avançar nessa aventura vibrante e inovadora.", 
    categoria: "Plataforma", ano: 2017, nota: 9.7, 
    imagem: require("../assets/mario.webp")
  },
  { 
    id: 3, nome: "Minecraft", 
    descricao: "Em um universo gerado aleatoriamente, os jogadores são livres para explorar, minerar, construir e sobreviver. Enfrentando criaturas hostis como zumbis e Creepers, é possível criar estruturas grandiosas ou embarcar em aventuras misteriosas em cavernas e fortalezas, tornando cada experiência única.", 
    categoria: "Sandbox", ano: 2011, nota: 9.5, 
    imagem: require("../assets/mine.webp") 
  },
  { 
    id: 4, nome: "God of War", 
    descricao: "Kratos, um guerreiro marcado por seu passado sangrento, busca um novo propósito ao lado de seu filho Atreus. Juntos, eles viajam por terras nórdicas repletas de deuses e monstros, enfrentando desafios épicos e descobrindo segredos sobre sua própria linhagem e destino.", 
    categoria: "Ação", ano: 2018, nota: 9.6, 
    imagem: require("../assets/gow.webp") 
  },
  { 
    id: 5, nome: "The Witcher 3: Wild Hunt", 
    descricao: "Geralt de Rivia, um caçador de monstros profissional, embarca em uma perigosa missão para encontrar sua filha desaparecida. Enquanto viaja por um mundo vasto e cheio de intrigas políticas, criaturas mitológicas e escolhas morais difíceis, ele deve enfrentar inimigos formidáveis e tomar decisões que moldarão o destino dos reinos.", 
    categoria: "RPG", ano: 2015, nota: 9.7, 
    imagem: require("../assets/witcher.jpg") 
  },
  { 
    id: 6, nome: "Red Dead Redemption 2", 
    descricao: "Arthur Morgan, um fora da lei e membro da gangue Van der Linde, luta para sobreviver em um Oeste selvagem em decadência. Enfrentando dilemas morais, traições e a crescente influência da civilização, Arthur deve decidir seu próprio caminho em uma jornada repleta de ação, drama e escolhas impactantes.", 
    categoria: "Ação", ano: 2018, nota: 9.8, 
    imagem: require("../assets/rdr2.webp") 
  },
  { 
    id: 7, nome: "Cyberpunk 2077", 
    descricao: "V, um mercenário cyberneticamente aprimorado, busca um implante lendário que concede a imortalidade. Em meio às ruas caóticas de Night City, onde poder e ambição se chocam, ele enfrenta corporações impiedosas, hackers clandestinos e escolhas que moldam o destino da cidade e de sua própria vida.", 
    categoria: "RPG", ano: 2020, nota: 8.5, 
    imagem: require("../assets/Cyberpunk.webp") 
  },
  { 
    id: 8, nome: "Hollow Knight", 
    descricao: "Em um reino subterrâneo em ruínas, um pequeno guerreiro mascarado se aventura por corredores escuros e vastos, enfrentando criaturas sinistras e desvendando mistérios antigos. Com combates desafiadores e uma narrativa profunda, Hollow Knight oferece uma jornada melancólica e repleta de descobertas.", 
    categoria: "Metroidvania", ano: 2017, nota: 9.4, 
    imagem: require("../assets/hollow.jpg") 
  },
  { 
    id: 9, nome: "Dark Souls III", 
    descricao: "Em um mundo sombrio e decadente, um guerreiro não morto desperta para evitar a extinção da chama primordial. Enfrentando inimigos formidáveis e chefões aterrorizantes, ele deve lutar, explorar e descobrir os segredos de um universo repleto de sofrimento e glória.", 
    categoria: "RPG", ano: 2016, nota: 9.3, 
    imagem: require("../assets/ds3.jpg") 
  }
];

export default Jogos;
