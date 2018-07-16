loggedID = JSON.parse(localStorage.getItem('loggedID'))
let logged = JSON.parse(localStorage.getItem("logged"))
console.log(loggedID)
//Inserir testemunhos
let testimonials = JSON.parse(localStorage.getItem("testimonials"))
let users = JSON.parse(localStorage.getItem("users"))
let teachers = JSON.parse(localStorage.getItem("teachers"))
console.log(users)
let text = ""
console.log("teste")

if (teachers != null) {
    for (i = 0; i < teachers.length; i++) {
        console.log("teste")
        let userID = teachers[i].userID
        console.log(userID)
        let userName = teachers[i].name
        text += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><br><img src=\"" + teachers[i].img + "\" class=\"rounded-circle\" width=\"100\" height=\"100\"><br><br><h4 class=\"card-title\">" + userName + "</h4><p class=\"card-text\"><b>Formação: </b>" + teachers[i].studies + "</p>" + "<p class=\"card-text\"><b>CV curto: </b>" + teachers[i].shortcv + "</p>" + "<br></div></div></div></div></div>"
    }
    document.getElementById("testimonialValues").innerHTML = text
}


class Teacher {
    constructor(name, img, studies, shortcv) {
        this.name = name
        this.img = img
        this.studies = studies
        this.shortcv = shortcv
    }

}


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

    //Login
    let formLogin = document.getElementById('login')
    document.getElementById("buttonLogin").onclick = function () {

        console.log(JSON.parse(localStorage.getItem("users"))[0].email)

        let ok = false
        let email = document.getElementById('emailLogin').value
        let pass = document.getElementById('passLogin').value

        for (let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++) {
            //console.log(JSON.parse(localStorage.getItem("users"))[i].email)
            if (JSON.parse(localStorage.getItem("users"))[i].email == email) { //Por agora vou trabalhar com as variáveis internas, e assim funciona


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
            location.reload()
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




    
    logged = JSON.parse(localStorage.getItem("logged"))

    console.log(users[loggedID].usertype)
    console.log(logged)

    if (users[loggedID].usertype != 2 && logged) {
        console.log("teste")
        document.getElementById("createComment").disabled = false
        document.getElementById("createComment").title = "Enviar"



        let testimonialButton = document.getElementById('createComment')
        let newTeacher
        let existingTestimonials
        testimonialButton.addEventListener('click', function () {

            for (i = 0; i < users.length; i++) {
                console.log(users[i].id)
                console.log(loggedID)
                if (users[i].id == loggedID + 1) {
                    let name = users[i].user
                    let img = users[i].img
                    let studies = document.getElementById('studies').value
                    let shortcv = document.getElementById('shortcv').value
                    newTeacher = new Teacher(name, img, studies, shortcv)

                    existingTestimonials = JSON.parse(localStorage.getItem("teachers"))
                    if (existingTestimonials == null) {
                        existingTestimonials = []
                    }
                }
            }

            console.log(newTeacher)
            localStorage.setItem("newTeacher", JSON.stringify(newTeacher))
            existingTestimonials.push(newTeacher)
            localStorage.setItem("teachers", JSON.stringify(existingTestimonials))
            location.reload()
        })

    }else{
        document.getElementById("professorsOnly").style.display = "none"
    }


}