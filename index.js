const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public"))); app.use(express.urlencoded());

const cavaleiros = [
  {
    id: .01,
    nome: 'Seiya de Pégaso',      
    imagem: 'https://static.wikia.nocookie.net/saintseya/images/7/70/SEIYA_DE_P%C3%89GASO.png/revision/latest/scale-to-width-down/329?cb=20160805213355&path-prefix=pt',
    classificaçao: 'Cavaleiro de Bronze',
    armadura: "Armadura de Pégaso",
    constelaçao:'Pégasus',
    divindade:'Atena',
    aniversario:'01 de Dezembro',
    signo:'Sagitário',
    habilidade:' Meteoro de pégaso',
    descriçao:'Seiya de Pégaso é Cavaleiro de Bronze da constelação de Pégaso do século XX, incumbido com a missão de proteger a deusa Atena nas Guerras Santas no século XX. Caracterizado principalmente por nunca desistir de lutar em qualquer situação, por mais impossível ou difícil que possa parecer, ele também é a reencarnação do Cavaleiro de Bronze Tenma de Pégaso e do Primeiro Pégaso, o primeiro homem a ferir o Deus Hades nos tempos mitológicos.'   
  },

  {
    id: .02,
    nome: 'Shiryu de Dragão',      
    imagem: 'https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest/scale-to-width-down/350?cb=20151229134313&path-prefix=pt',
    classificaçao: 'Cavaleiro de Bronze',
    armadura: "Armadura de Dragão",
    constelaçao:'Dragão',
    divindade:'Atena',
    aniversario:'04 de Outubro',
    signo:'Libra',
    habilidade:' Cólera do dragão',
    descriçao:'Shiryu de Dragão é um Cavaleiro de Bronze do século XX, incumbido com a missão de proteger a deusa Atena. Teve seu treinamento realizado pelo Mestre Ancião nos Cinco Picos Antigos de Rozan, na China.'
    
  },

  {
    id: .03,
    nome: 'Shun de Andrômeda',      
    imagem: 'https://static.wikia.nocookie.net/saintseya/images/a/ac/SHUN_DE_ANDR%C3%94MEDA.png/revision/latest/scale-to-width-down/350?cb=20170526213118&path-prefix=pt',
    classificaçao: 'Cavaleiro de Bronze',
    armadura: "Armadura de Andrômeda",
    constelaçao:'Andrômeda',
    divindade:'Atena',
    aniversario:'09 de Setembro',
    signo:'Virgem',
    habilidade:' Corrente nebulosa',
    descriçao:'Shun de Andrômeda é um Cavaleiro de Bronze do século XX, incumbido com a missão de proteger a deusa Atena do mal.'    
  },

  {
    id:.04,
    nome: 'Hyoga de Cisne',      
    imagem: 'https://static.wikia.nocookie.net/saintseya/images/9/9d/Hyoga_3_cloth.png/revision/latest/scale-to-width-down/350?cb=20130331042305&path-prefix=pt',
    classificaçao: 'Cavaleiro de Bronze',
    armadura: "Armadura de Cisne",
    constelaçao:'Cisne',
    divindade:'Atena',
    aniversario:'23 de Janeiro',
    signo:'Aquário',
    habilidade: ' Pó de diamante',
    descriçao:'Nas frias terras das Geleiras Eternas, no leste da Sibéria, Hyoga torna-se Cavaleiro tendo como mestre Camus, o Cavaleiro de Ouro de Aquário, que manipula o frio. Seguindo os ensinamentos do seu mestre, ele tenta manter-se racional diante de tudo, mas possui um lado emotivo que não consegue abandonar.'    
  },

  {
    id:.05,
    nome: 'Ikki de Fênix',      
    imagem: 'https://static.wikia.nocookie.net/saintseya/images/7/71/Ikki_3_cloth.png/revision/latest/scale-to-width-down/350?cb=20120325024118&path-prefix=pt',
    classificaçao: 'Cavaleiro de Bronze',
    armadura: "Armadura de Fênix",
    constelaçao:'Fênix',
    divindade:'Atena',
    aniversario:'15 de Agosto',
    signo:'Leão',
    habilidade:' Golpe fantasma de fênix',
    descriçao:'Ikki de Fênix é um Cavaleiro de Bronze do século XX e irmão mais velho do também cavaleiro de bronze, Shun de Andrômeda. Na Ilha da Rainha da Morte, onde foi treinado, acaba vendo Esmeralda, seu grande amor, morta por uma falha sua e fica sabendo o terrível segredo de seu nascimento. Tais fatos são suficientes para ele começar a odiar a tudo e a todos. Ikki comandou os Cavaleiros Negros em uma vingança contra Saori Kido, mas se arrependeu e agora luta pela Deusa Atena, ajudando seus amigos e seu irmão sempre que necessário.'    
  }
]

app.get("/", (req, res) => {
  res.render("index" , {cavaleiros});
});

app.post("/add", (req,res) => {
  const personagem = req.body;
  cavaleiros.push(personagem);

  res.redirect('/');
  
});

app.listen(3000)

