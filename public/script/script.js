const bt = document.getElementById('bt')

function makePDF() {
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        let dados = JSON.parse(json)
        console.log(dados)
    })
}


function gerarPDF() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById('sobrenome').value
    let profissao = document.getElementById('profissao').value
    let nascimento = document.getElementById('nascimento').value

    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let linkedin = document.getElementById('linkedin').value
    let instagram = document.getElementById('instagram').value
    let facebook = document.getElementById('facebook').value

    let formacao01 = document.getElementById('formacao01').value
    let formacao02 = document.getElementById('formacao02').value
    let formacao03 = document.getElementById('formacao03').value

    let experiencia01 = document.getElementById('experiencia01').value
    let experiencia02 = document.getElementById('experiencia02').value
    let experiencia03 = document.getElementById('experiencia03').value

    let sobre = document.getElementById('sobre').value

    let post = { nome, sobrenome, profissao, nascimento,  email, telefone, linkedin, instagram, facebook, formacao01, formacao02, formacao03, experiencia01, experiencia02, experiencia03, sobre }
    //console.log(post)
    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {
        //console.log(res)


    })
}


bt.addEventListener('click', gerarPDF)