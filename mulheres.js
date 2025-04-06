const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ana Souza',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQFpkAHTn0A8ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730942309784?e=1746662400&v=beta&t=1TBtBpNxmvBYGMLC4ZWoxTluUK3xgOmYEwIMrewfyJc',
        minibio: 'Cientista de dados e BI'
    },
    {
        nome: 'Simara Concenição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)