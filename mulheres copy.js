const express = require("express") //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const conectBD = require('./bancoDeDados') //liga ao arquivo bancoDeDados
conectBD() //Chama a função conectBD no arquivo

const app = express() //iniciando o app
app.use(express.json())
const porta = 3333 //criando a porta

//criando lista inicial de mulheres
const mulheres = [
    {
        id:'1',
        nome: 'Ana Souza',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQFpkAHTn0A8ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730942309784?e=1746662400&v=beta&t=1TBtBpNxmvBYGMLC4ZWoxTluUK3xgOmYEwIMrewfyJc',
        minibio: 'Cientista de dados e BI'
    },
    {
        id: '2',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: '3',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response)  {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {

    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configura rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configura rota POST /mulheres
app.patch('/mulheres/:id', corrigeMulher) //configura roa PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //rota DELETE /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta