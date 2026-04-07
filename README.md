# API de Discos

## Descrição

API simples desenvolvida com Express para gerenciamento de discos musicais.

---

## Como executar o projeto

```bash
npm install
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## Endpoints

### * GET /

* **Descrição:** Retorna mensagem de teste
* **URL:** `/`
* **Método:** GET
* **Body:** Não possui

#### Resposta:

```json
"Hello World!"
```

#### Exemplo no Postman:

![alt text](image.png)

---

### * GET /discos

* **Descrição:** Retorna lista de discos
* **URL:** `/discos`
* **Método:** GET
* **Body:** Não possui

#### Resposta:

```json
[
  {
    "id": 1,
    "artista": "Radiohead",
    "titulo": "In Rainbows"
  }
]
```

#### Exemplo no Postman:

![alt text](image-1.png)

---

### * POST /discos

* **Descrição:** Adiciona um novo disco
* **URL:** `/discos`
* **Método:** POST
* **Body:** JSON obrigatório

#### Exemplo de requisição:

```json
{
  "artista": "Pearl Jam",
  "titulo": "Ten"
}
```

#### Resposta (201 Created):

```json
{
  "id": 8,
  "artista": "Pearl Jam",
  "titulo": "Ten"
}
```

#### Resposta de erro (400 Bad Request):

```json
{
  "error": "Artista e título são obrigatórios"
}
```

#### Exemplo no Postman:

 * 1

![alt text](image-2.png)

 * 2

![alt text](image-3.png)

 * 3

![alt text](image-4.png)

 * 4

![alt text](image-5.png)

 * 5 (erro)

![alt text](image-6.png)

---

### * PUT /discos/:id

* **Descrição:** Atualiza um disco existente pelo ID
* **URL:** `/discos/:id`
* **Método:** PUT
* **Body:** JSON obrigatório

#### Exemplo de requisição:

```json
{
  "artista": "Nirvana",
  "titulo": "Nevermind"
}
```

#### Resposta (200 OK):

```json
{
  "id": 1,
  "artista": "Nirvana",
  "titulo": "Nevermind"
}
```

#### Resposta de erro (400 Bad Request):

```json
{
  "error": "Artista e título são obrigatórios"
}
```

#### Resposta de erro (404 Not Found):

```json
{
  "error": "Disco não encontrado"
}
```

---

### * DELETE /discos/:id

* **Descrição:** Remove um disco pelo ID
* **URL:** `/discos/:id`
* **Método:** DELETE
* **Body:** Não possui

#### Exemplo de requisição:

```
DELETE /discos/1
```

#### Resposta (200 OK):

```json
{
  "message": "Disco removido com sucesso"
}
```

#### Resposta de erro (404 Not Found):

```json
{
  "error": "Disco não encontrado"
}
```

---

## Validações Implementadas

A API possui validações nos endpoints de criação e atualização:

```js
if (!req.body.artista || !req.body.titulo) {
    return res.status(400).json({ error: "Artista e título são obrigatórios" });
}
```

### O que essas validações fazem:

* Garante que o campo **artista** seja enviado
* Garante que o campo **titulo** seja enviado
* Impede inserção ou atualização com dados incompletos
* Retorna erro **400 Bad Request** caso falhe

### Tratamento adicional:

* Retorna **404 Not Found** quando o ID não existe (PUT e DELETE)

---

## Observações

* Os dados são armazenados em memória (array), ou seja:

  * Ao reiniciar o servidor, os dados são resetados
* IDs são gerados automaticamente com base no tamanho do array

---

## Autora

Projeto desenvolvido por Sofia Medeiros da Fonseca para fins de estudo em APIs, Node.js e Express.
