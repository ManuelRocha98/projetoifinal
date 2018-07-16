//Variáveis Globais:
let users = []
let userss = []


let logged = JSON.parse(localStorage.getItem("logged"))
let loggedID = JSON.parse(localStorage.getItem("loggedID"))

//Vai simplificar saber qual é o indice no array users do utilizador loggado
let indexUser = 0



//------------------------------------------

window.onload = function () {


    
    console.log(users)


    console.log(logged)


    if (logged) {

        let loggedID = JSON.parse(localStorage.getItem("loggedID"))
        users = JSON.parse(localStorage.getItem("users"))
        let currentUser = users[loggedID].user
        document.getElementById("currentUser").innerHTML = currentUser
        let currentPass = users[loggedID].pass
        let currentEmail = users[loggedID].email
        document.getElementById("currentEmail").innerHTML = "Atual: " + currentEmail
        let currentImg = users[loggedID].img
        document.getElementById('currentImg').src = currentImg
        let currentUserType = users[loggedID].usertype


        if (currentUserType == 1) {
            document.getElementById('currentUserType').innerHTML = "Docente"
        }
        if (currentUserType == 2) {
            document.getElementById('currentUserType').innerHTML = "Estudante"
        }
    } else {
        document.getElementById("warning").innerHTML = "Não há nenhum utilizador logado! <a href=\"index.html\">Voltar ao início</a>"
        document.getElementById("hideDiv").innerHTML = " "
        let btnLogout = document.getElementById('btnLogout')
        btnLogout.style.display = "none"
    }






    //Fazer logout
    let btnLogout = document.getElementById('btnLogout')
    document.getElementById("btnLogout").onclick = function () {

        //indexUtilizador = 0
        //localStorage.setItem('indexUtilizador', JSON.stringify(indexUtilizador))

        logged = false; //Em principio vai ser esta variavel que vai dizer o que é que se mostra ou não nas páginas
        localStorage.setItem('logged', JSON.stringify(logged))

        location.reload()

    }


    changeImgLink.addEventListener('click', function () {
        users = JSON.parse(localStorage.getItem("users"))
        let usersUpd = users

        for (i = 0; i < users.length; i++) {
            if (users[i].img == users[loggedID].img) {
                usersUpd[i].img = document.getElementById('changeImg').value

            } else {
                console.log(usersUpd[i])
                console.log(users[i])
                usersUpd[i] = users[i]
            }
            localStorage.setItem("users", JSON.stringify(usersUpd))
        }
        console.log(usersUpd)
        location.reload()
    })

    changeEmailLink.addEventListener('click', function () {
        users = JSON.parse(localStorage.getItem("users"))
        let usersUpd = users

        for (i = 0; i < users.length; i++) {
            if (users[i].email == users[loggedID].email) {
                usersUpd[i].email = document.getElementById('changeEmail').value

            } else {
                console.log(usersUpd[i])
                console.log(users[i])
                usersUpd[i] = users[i]
            }
            localStorage.setItem("users", JSON.stringify(usersUpd))
        }
        console.log(usersUpd)
        location.reload()

    })


    changePasswordLink.addEventListener('click', function () {
        users = JSON.parse(localStorage.getItem("users"))
        let usersUpd = users

        for (i = 0; i < users.length; i++) {
            if (document.getElementById('currentPass').value == users[loggedID].pass) {
                if (document.getElementById('newPass').value != "") {
                    if (users[i].pass == users[loggedID].pass) {
                        usersUpd[i].pass = document.getElementById('newPass').value

                    } else {
                        console.log(usersUpd[i])
                        console.log(users[i])
                        usersUpd[i] = users[i]
                    }
                    localStorage.setItem("users", JSON.stringify(usersUpd))
                    location.reload()
                } else {
                    document.getElementById("errorMsg").style.display = "inline-block"
                    document.getElementById("errorMsg").innerHTML = "Campo vazio!"
                }
            } else {
                document.getElementById("errorMsg").style.display = "inline-block"
                document.getElementById("errorMsg").innerHTML = "Password incorreta! Tente novamente."
            }
        }
        console.log(usersUpd)


    })


}



