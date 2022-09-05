const pdf = require('html-pdf')
const ejs = require('ejs')
const fs = require('fs')

module.exports = {

    dados: {
        nome: 'Seu Nome',
        sobrenome: 'Seu sobrenome',
        profissao: 'Sua profissão',
        nascimento: 'Sua data de Nascimento',

        email: 'Seu email',
        telefone: 'Seu Telefone',
        linkedin: 'Linkedin',
        instagram: 'instagram',
        facebook: 'facebook',

        formacao01: 'formacao01',
        formacao02: 'formacao02',
        formacao03: 'formacao03',

        experiencia01: 'experiencia01',
        experiencia02: 'experiencia02',
        experiencia03: 'experiencia03',

        sobre: 'Sobre você'
    },

    getAll() {
        return this.dados;
    },

    newTopic(contentTopic) {
        this.dados.newTopic = contentTopic
    },

    newDados(nome, sobrenome, profissao, nascimento,  email, telefone, linkedin, instagram, facebook, formacao01, formacao02, formacao03, experiencia01, experiencia02, experiencia03, sobre) {
        this.dados.nome = nome
        this.dados.sobrenome = sobrenome
        this.dados.profissao = profissao
        this.dados.nascimento = nascimento

        this.dados.email = email
        this.dados.telefone = telefone
        this.dados.linkedin = linkedin
        this.dados.instagram = instagram
        this.dados.facebook = facebook

        this.dados.formacao01 = formacao01
        this.dados.formacao02 = formacao02
        this.dados.formacao03 = formacao03

        this.dados.experiencia01 = experiencia01
        this.dados.experiencia02 = experiencia02
        this.dados.experiencia03 = experiencia03
        
        this.dados.sobre = sobre
    },

    makePDF() {
        ejs.renderFile("./model/resumo.ejs", { nome: this.dados.nome, sobrenome: this.dados.sobrenome, profissao: this.dados.profissao, nascimento: this.dados.nascimento,  email: this.dados.email, telefone: this.dados.telefone, linkedin: this.dados.linkedin, instagram: this.dados.instagram, facebook: this.dados.facebook, formacao01: this.dados.formacao01, formacao02: this.dados.formacao02, formacao03: this.dados.formacao03, experiencia01: this.dados.experiencia01, experiencia02: this.dados.experiencia02, experiencia03: this.dados.experiencia03, sobre: this.dados.sobre }, (err, res) => {
            if (err) {
                console.log(err)
                console.log('DEU ERRO NO RENDERFILE')
            } else {
                console.log(res)
                console.log('DEU CERTO O RENDERFILE')
                pdf.create(res, {}).toFile('./model/resumoPDF.pdf', (err, res) => {
                    if (err) {
                        console.log(err)
                        console.log('ALGO DEU ERRADO NA CRIAÇÃO DO PDF')
                    } else {
                        console.log(res)
                        console.log('DEU CERTO A CRIAÇÃO DO PDF')
                    }
                })
            }
        })
    }
}