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

//hello world
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//listar todos os discos
app.get('/discos', (req, res) => {
    res.json(discos);
})

//adicionar um novo disco com validação de campos obrigatórios
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

//deletar um disco por id com tratamento de erro para id não encontrado
app.delete('/discos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = discos.findIndex(disco => disco.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Disco não encontrado" });
    }
    discos.splice(index, 1);
    res.status(200).json({ message: "Disco removido com sucesso" });
});

//atualizar um disco por id com validação de campos obrigatórios e tratamento de erro para id não encontrado
app.put('/discos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = discos.findIndex(disco => disco.id === id); 
    if (index === -1) {
        return res.status(404).json({ error: "Disco não encontrado" });
    } 
    if (!req.body.artista || !req.body.titulo) {
        return res.status(400).json({ error: "Artista e título são obrigatórios" });
    }
    discos[index].artista = req.body.artista;
    discos[index].titulo = req.body.titulo;
    res.status(200).json(discos[index]);
});

app.listen(port, () => {
    console.log("Servidor rodando!")
})

