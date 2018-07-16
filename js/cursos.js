//Variáveis Globais:
let tags = []
//Vai servir para saber se há alguém com sessão iniciada ou não


let logged = JSON.parse(localStorage.getItem("logged"))

console.log(logged)



//Vai simplificar saber qual é o indice no array users do utilizador loggado
let loggedID = 0;

let courses = []

let tags2 = []

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
    }


    //Inserir cursos na página
    let courses = JSON.parse(localStorage.getItem("courses"))
    let coursesValues = ""
    for (i = 0; i < courses.length; i++) {

        if (courses[i].img != null) {
            coursesValues += "<div class=\"col-lg-4 col-sm-6 portfolio-item\"><div class=\"card h-100\"><a href=\"#\"></a><img class=\"card-img-top cardFix\" src=\"" + courses[i].img + "\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"detalhescursos.html?" + courses[i].title + "\">" + courses[i].title + " - " + courses[i].price + "€ " + "</a></h4><p class=\"card-text\"><b>" + courses[i].iniDate + "</b></p><p class=\"card-text\">" + courses[i].desc + "</p></div></div></div>"
        } else {
            coursesValues += "<div class=\"col-lg-4 col-sm-6 portfolio-item\"><div class=\"card h-100\"><a href=\"#\"></a><img class=\"card-img-top cardFix\" src=\"https://cdn.cwsplatform.com/assets/no-photo-available.png\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"detalhescursos.html?" + courses[i].title + "\">" + courses[i].title + " - " + courses[i].price + "€ " + "</a></h4><p class=\"card-text\"><b>" + courses[i].iniDate + "</b></p><p class=\"card-text\">" + courses[i].desc + "</p></div></div></div>"
        }
    }
    document.getElementById("coursesDiv").innerHTML = coursesValues

    //Login

    document.getElementById("buttonLogin").onclick = function () {

        console.log(JSON.parse(localStorage.getItem("users"))[0].email)

        let ok = false
        let email = document.getElementById('emailLogin').value
        let pass = document.getElementById('passLogin').value

        for (let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++) {
            
            if (JSON.parse(localStorage.getItem("users"))[i].email == email) {


                if (JSON.parse(localStorage.getItem("users"))[i].pass == pass) {
                    ok = true

                    loggedID = i
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



            logged = JSON.parse(localStorage.getItem("logged"))
            if (logged) {
                console.log(users[loggedID].usertype)
                console.log(logged)
                if (logged) {
                    //Botão de inserir comentário
                    console.log("teste")
                    document.getElementById("createComment").disabled = false
                    document.getElementById("createComment").title = "Enviar"
                }
            }


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