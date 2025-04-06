const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Ana de Souza',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQFpkAHTn0A8ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730942309784?e=1746662400&v=beta&t=1TBtBpNxmvBYGMLC4ZWoxTluUK3xgOmYEwIMrewfyJc',
        minibio: 'Cientista de dados e BI'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)