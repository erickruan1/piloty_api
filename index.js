import express from "express"; // Imortando Express (creador API)
import cors from "cors"; // Importando a pkg CORS.

const app = express();
app.use(cors()); // Ativando o CORS package.
const PORT = 3001; // Porta de acesso localhost.

const names = { name: "abc" };
const palavroes = {words: "poha;caralho;buceta;cuceta"};
const scan = {words: "giftcard steam;giftcard stean"}
const dezoito = {words: "porno;prono;gay porn;porn; porn gay"}
const data = {
  number: 0,
  text: "",
  text2: "",
};

const arrResponse = [
  { name: "erickruan12", company: "Piloty" },
  { name: "erickruan12", company: "#Piloty V 1.0.3" },
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
app.get("/palavroes", (req, res) => {
  res.send(palavroes);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
