//Variáveis Globais:
let users = []



//------------------------------------------
window.onload = function () {
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

}