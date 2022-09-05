const ejs = require('ejs')
const pdf = require('html-pdf')

module.exports = {
    makePDF() {
        fetch("http://localhost:3000/api/all").then(res => {
            return res.json()
        }).then(json => {
            console.log(json)

            let posts = JSON.parse(json)

            ejs.renderFile("./relatorio.ejs", { nome: posts.nome, sobrenome: posts.sobrenome, profissao: posts.profissao, nascimento: posts.nascimento, email: posts.email, telefone: posts.telefone, linkedin: posts.linkedin, instagram: posts.instagram, facebook: posts.facebook, formacao01: posts.formacao01, formacao02: posts.formacao02, formacao03: posts.formacao03, experiencia01: posts.experiencia01, experiencia02: posts.experiencia02, experiencia03: posts.experiencia03, sobre: posts.sobre }, (err, res) => {
                if (err) {
                    console.log(err)
                    console.log('DEU ERRO NO RENDERFILE')
                } else {
                    console.log(res)
                    console.log('DEU CERTO O RENDERFILE')
                }
            })
        })
        /* console.log('ENTROU NO GEADOR DE PDF')

        ejs.renderFile('../../model/relatorio.ejs', { nome: nome, sobrenome: sobrenome, profissao: profissao, email: email, telefone: telefone, nascimento: nascimento, sobre: sobre }, (err, res) => {
            if (err) {
                console.log(err)
                console.log('DEU RUIM')
            } else {
                console.log(res)
                console.log('DEU BOM')
                pdf.create(res, {}).toFile('./RELATORIO.pdf', (err, res) => {
                    if (err) {
                        console.log(err)
                        console.log('UM ERRO ACONTECEU OH MEU DEU EU N ESPERAVA ISSO AAAAHHHH')
                    } else {
                        console.log(res)
                        console.log('Deu tudo certo fique suave meu amigo')
                    }

                })
            }
        }) */
    }

}

