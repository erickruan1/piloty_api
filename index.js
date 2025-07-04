import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // para body JSON

const PORT = 3001;

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

// Rotas
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

app.get("/update/members", (req, res) => {
  const valor = req.query.q;

  if (!valor) {
    return res.status(400).json({ erro: "Parâmetro 'q' é obrigatório." });
  }

  try {
    members[0].members = valor;
    return res.json({ mensagem: "Membros atualizados!", members });
  } catch (e) {
    console.error("Erro:", e);
    return res.status(500).json({ erro: "Erro interno ao atualizar membros." });
  }
});

app.get("/update/online", (req, res) => {
  const valor = req.query.q;

  if (!valor) {
    return res.status(400).json({ erro: "Parâmetro 'q' é obrigatório." });
  }

  try {
    members[1].online = valor;
    return res.json({ mensagem: "Online atualizado!", members });
  } catch (e) {
    console.error("Erro:", e);
    return res.status(500).json({ erro: "Erro interno ao atualizar online." });
  }
});

// Só use app.listen localmente (não precisa na Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`));
}

// Exporta o app para Vercel
export default app;
