let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let comentario = document.querySelector('#comentario')

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
    }

 function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('com') == -1){
            txtEmail.innerHTML = 'Nome inválido'
            txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'Nome válido'
            txtEmail.style.color = 'green'
        }
        }

