const express = require("express");
const app = express();

const pokedex = [
  {
    id: "X",
    nome: "X",
    imagem: "X",
    descriçao: "X",
    tipo: "X"
    
  },

  {
    id: "X",
    nome: "X",
    imagem: "X",
    descriçao: "X",
    tipo: "X"
    
  },

  {
    id: "X",
    nome: "X",
    imagem: "X",
    descriçao: "X",
    tipo: "X"
    
  }
]

app.set("view engine" , "ejs");

app.get("/", (req, res) => {
  res.render("index" , {pokedex});
});

app.get("/home", (req, res) => {
  res.send("Olá mundo do express");
});

app.listen(3000, () => console.log("servidor funcionando em http://localhost:3000/home"));
