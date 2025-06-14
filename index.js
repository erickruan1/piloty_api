import express from "express"; // Imortando Express (creador API)
import cors from "cors"; // Importando a pkg CORS.

const app = express();
app.use(cors()); // Ativando o CORS package.
const PORT = 3001; // Porta de acesso localhost.
const names = { name: "abc" };
const data = {
  number: 0,
  number2: 0,
  text: "OBMEP 03/06",
  text2: "Olimpíada Brasileira de Matemática das Escolas Públicas.",
  title2: "Prova de biologia 00/06",
  desc2: "Prova de biologia sem data confirmada, estudos via teams utilizando os slides dos trabalhos.",
  title3: "Not Found",
  desc3: "Not found"
};
const data2 = {words: "poxa;nossa"};
const arrResponse = [
  { name: "erickruan12", company: "abc" },
  { name: "Alon", company: "Hashtag Treinamentos" },
];

// Requisição padrão
app.get("/", (req, res) => {
  res.json(arrResponse);
});
//Requisição de 1 item
app.get("/api", (req, res) => {
  res.send(names);
});
// Requisição de informações
app.get("/data", (req, res) => {
  res.json(data);
});
// Requisição de palavras como teste.
app.get("/data2", (req, res) => {
  res.send(data2);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
