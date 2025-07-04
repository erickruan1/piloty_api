import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Deixe `let` para poder alterar
let members = [
  { members: "0" },
  { online: "0" }
];

const names = { name: "abc" };
const palavroes = { words: "hello" };
const scan = { words: "giftcard steam;giftcard stean" };
const dezoito = { words: "p" };

const data = {
  number: 0,
  text: "",
  text2: "",
};

const arrResponse = [
  { name: "erickruan12", company: "Piloty" },
  { name: "erickruan12", company: "#Piloty V 1.0.3" },
];

// Rotas GET
app.get("/", (req, res) => {
  res.json(arrResponse);
});
app.get("/api", (req, res) => {
  res.send(names);
});
app.get("/data", (req, res) => {
  res.json(data);
});
app.get("/palavroes", (req, res) => {
  res.send(palavroes);
});
app.get("/members", (req, res) => {
  res.json(members);
});

// 🔄 Atualizar via query string
// Ex: /update/members?q=20
app.get("/update/members", (req, res) => {
  const valor = req.query.q;
  if (valor) {
    members[0].members = valor;
    return res.json({ mensagem: "Atualizado!", members });
  } else {
    return res.status(400).json({ erro: "Valor inválido" });
  }
});

// Ex: /update/online?q=5
app.get("/update/online", (req, res) => {
  const valor = req.query.q;
  if (valor) {
    members[1].online = valor;
    return res.json({ mensagem: "Atualizado!", members });
  } else {
    return res.status(400).json({ erro: "Valor inválido" });
  }
});
