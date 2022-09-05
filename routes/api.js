const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser') // serve para facilitar quando se ta trabalhando com requisição, para conseguir pegar os dados q vem de nossa requisição
const posts = require('../model/post')


// PREPARANDO AS ROTAS -> serão duas rotas: uma para buscar todos os posts, q são os posts q seram exibidos na tela, e uma rota para adicionar um segundo post no nosso array (inicialmente será por array) 

router.get('/all', (req, res) => { // Rota para buscar os posts


    res.json(JSON.stringify(posts.getAll()))

})
router.post('/new', bodyParser.json(), (req, res) => { // Rota para publicar um novo post
    //let id = generateID()
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let profissao = req.body.profissao
    let nascimento = req.body.nascimento

    let email = req.body.email
    let telefone = req.body.telefone
    let linkedin = req.body.linkedin
    let instagram = req.body.instagram
    let facebook = req.body.facebook

    let formacao01 = req.body.formacao01
    let formacao02 = req.body.formacao02
    let formacao03 = req.body.formacao03

    let experiencia01 = req.body.experiencia01
    let experiencia02 = req.body.experiencia02
    let experiencia03 = req.body.experiencia03
    
    let sobre = req.body.sobre

    posts.newDados(nome, sobrenome, profissao, nascimento,  email, telefone, linkedin, instagram, facebook, formacao01, formacao02, formacao03, experiencia01, experiencia02, experiencia03, sobre )
    posts.makePDF()
    //geradorPDF.geraPDF(nome, sobrenome, profissao, email, telefone, nascimento, sobre)
    //geradorPDF.makePDF()


    res.send('Post adicionado') // mandando uma resposta (até o momento n estamos fazendo uma checagem de erro)

})

module.exports = router