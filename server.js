const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const discos = [
    { id: 1, artista: "Radiohead", titulo: "In Rainbows" },
    { id: 2, artista: "Pink Floyd", titulo: "The Wall" },
    { id: 3, artista: "Lana Del Rey", titulo: "Ultraviolence" },
    {id: 4, artista: "Joy Division", titulo: "Unknown Pleasures" },
    {id: 5, artista: "Red Hot Chili Peppers", titulo: "By the Way" },
    {id: 6, artista: "The Strokes", titulo: "The New Abnormal" },
    {id: 7, artista: "Dream Theater", titulo: "Metropolis Pt.2" },
];

//endpoint

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/discos', (req, res) => {
    res.json(discos);
})

app.post('/discos', (req, res) => {
    if (!req.body.artista || !req.body.titulo) {
        return res.status(400).json({ error: "Artista e título são obrigatórios" });
    }
    const novoDisco = {
        id: discos.length + 1,
        artista: req.body.artista,
        titulo: req.body.titulo
    };
    discos.push(novoDisco);
    res.status(201).json(novoDisco);
})

app.listen(port, () => {
    console.log("Servidor rodando!")
})

