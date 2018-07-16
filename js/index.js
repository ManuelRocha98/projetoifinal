//Variáveis Globais:
let users = []
let userss = []

//Vai servir para saber se há alguém com sessão iniciada ou não
let logged = JSON.parse(localStorage.getItem("logged"))

//Para saber utilizador logado
let loggedID = JSON.parse(localStorage.getItem("loggedID"))
console.log(loggedID)




//------------------------------------------

window.onload = function () {


    if (logged) {
        let btnLogin = document.getElementById('btnModal')
        btnLogin.style.display = "none"
        let btnRegistar = document.getElementById('btnModal2')
        btnRegistar.style.display = "none"
        let btnLogout = document.getElementById('btnLogout')
        btnLogout.style.display = "inline-block"
        let btnPerfil = document.getElementById('btnPerfil')
        btnPerfil.style.display = "inline-block"


        if (JSON.parse(localStorage.getItem("users"))[loggedID].usertype == 0) {
            let btnAdmin = document.getElementById('btnAdmin')
            btnAdmin.style.display = "inline-block"
        }
    }


    class User {
        constructor(user, pass, email, usertype, id, img) {
            this.user = user
            this.pass = pass
            this.email = email
            this.usertype = usertype //Vai distinguir se o utilizador é Estudante ou docente
            this.id = id
            this.img = img

        }
    }




    //Criar conta



    let LastID = 0
    let registerUser = document.getElementById('register')
    let userss = JSON.parse(localStorage.getItem("users"))

    if (!Array.isArray(userss) || userss.length == 0) {
        LastID = 0
    } else {
        LastID = userss.length
    }

    registerUser.addEventListener('click', function () {

        let user = document.getElementById('user').value
        let pass = document.getElementById('pass').value
        let email = document.getElementById('email').value
        let usertype = document.getElementById('usertype').value
        let img = document.getElementById('img').value
        let id = LastID + 1
        let repEmail = 0

        for (i = 0; i < userss.length; i++) {
            if (userss[i].email == email) {
                repEmail = 1

            }
        }

        if (img == "") {
            img = "https://www.sarahotels.in/img/default-user.png"
        }
        if (user != "" && pass != "" && email != "" && usertype != "" && repEmail == 0) {
            let newUser = new User(user, pass, email, usertype, id, img)

            let existingUsers = JSON.parse(localStorage.getItem("users"))
            if (existingUsers == null) {
                existingUsers = []
            }
            localStorage.setItem("newUser", JSON.stringify(newUser))
            existingUsers.push(newUser)
            localStorage.setItem("users", JSON.stringify(existingUsers))

            console.log(newUser)

            $('#myModal2').modal('hide')
            location.reload()
        } else {
            document.getElementById("errorMsg2").innerHTML = "Algum dos campos obrigatórios está vazio!"
            if (repEmail == 1) {
                document.getElementById("errorMsg2").innerHTML = "Esse email já está registado!"
            }
        }
    })


    //Login
    let formLogin = document.getElementById('login')
    document.getElementById("buttonLogin").onclick = function () {

        console.log(JSON.parse(localStorage.getItem("users"))[0].email)

        let ok = false
        let email = document.getElementById('emailLogin').value
        let pass = document.getElementById('passLogin').value

        for (let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++) {
            console.log(JSON.parse(localStorage.getItem("users"))[i].email)
            if (JSON.parse(localStorage.getItem("users"))[i].email == email) { //Por agora vou trabalhar com as variáveis internas, e assim funciona


                if (JSON.parse(localStorage.getItem("users"))[i].pass == pass) {
                    ok = true

                    loggedID = i; //Simplificar a vida
                    console.log("ok = " + ok)
                    localStorage.setItem('loggedID', JSON.stringify(loggedID))
                    console.log(JSON.parse(localStorage.getItem("users"))[i].usertype)
                    if (JSON.parse(localStorage.getItem("users"))[i].usertype == 0) {
                        let btnAdmin = document.getElementById('btnAdmin')
                        btnAdmin.style.display = "inline-block"
                    }
                }
            }
        }

        if (ok == true) {
            //Dizer que o utilizador está com sessão iniciada
            logged = true
            localStorage.setItem('logged', JSON.stringify(logged))
            console.log("ola")




            //Mostrar o botão de logout e esconder o de log-in
            let btnLogin = document.getElementById('btnModal')
            btnLogin.style.display = "none"
            let btnRegistar = document.getElementById('btnModal2')
            btnRegistar.style.display = "none"
            let btnLogout = document.getElementById('btnLogout')
            btnLogout.style.display = "inline-block"
            let btnPerfil = document.getElementById('btnPerfil')
            btnPerfil.style.display = "inline-block"

            //fechar modal

            $('#myModal').modal('hide')

        }
        else {

            document.getElementById("errorMsg").innerHTML = "Utilizador e/ou password incorretos!"

        }



    }


    //Fazer logout
    let btnLogout = document.getElementById('btnLogout')
    document.getElementById("btnLogout").onclick = function () {

        //Ativar o botão de registar
        let btnRegistar = document.getElementById('btnModal2')
        btnRegistar.style.display = "inline-block"


        //Esconder o botão de log-off e mostrar o de log-in
        let btnLogoff = document.getElementById('btnLogout')
        btnLogoff.style.display = "none"

        let btnLogin = document.getElementById('btnModal')
        btnLogin.style.display = "inline-block"

        //indexUtilizador = 0
        //localStorage.setItem('indexUtilizador', JSON.stringify(indexUtilizador))

        logged = false //Em principio vai ser esta variavel que vai dizer o que é que se mostra ou não nas páginas
        localStorage.setItem('logged', JSON.stringify(logged))

        location.reload()

    }


    //Personalizar mensagem de erro
    function errorMessage(email, pass) {
        let message = ""

        if (email) { //Ou seja o email não existe
            message = "O mail que introduziu não existe"
        }
        else if (pass) { //Se o mail existe mas a pass é true, então é porque o mail e a pass não correspondem
            message = "A password está errada"
        }

        return message
    }

}



