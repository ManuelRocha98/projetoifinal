loggedID = JSON.parse(localStorage.getItem('loggedID'))
let logged = JSON.parse(localStorage.getItem("logged"))
console.log(loggedID)
//Inserir testemunhos
let testimonials = JSON.parse(localStorage.getItem("testimonials"))
let users = JSON.parse(localStorage.getItem("users"))
console.log(users)
let text = ""
console.log("teste")
if (testimonials != null) {
    for (i = 0; i < testimonials.length; i++) {
        console.log("teste")
        let userID = testimonials[i].userID
        console.log(userID)
        let userName = users[userID].user
        text += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><br><img src=\"" + users[userID].img + "\" class=\"rounded-circle\" width=\"100\" height=\"100\"><br><br><h4 class=\"card-title\">" + userName + "</h4><p class=\"card-text\">" + testimonials[i].text + "</p><br></div></div></div></div></div>"
    }
    document.getElementById("testimonialValues").innerHTML = text
}


class Testimonial {
    constructor(text, userID) {
        this.text = text
        this.userID = userID
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


            //Botão de inserir testemunho
            logged = JSON.parse(localStorage.getItem("logged"))
            if (logged) {
                console.log(users[loggedID].usertype)
                console.log(logged)
                if (users[loggedID].usertype == 2 && logged) {
                    console.log("teste")
                    document.getElementById("createComment").disabled = false
                    document.getElementById("createComment").title = "Enviar"

                    let testimonialButton = document.getElementById('createComment')
                    testimonialButton.addEventListener('click', function () {

                        let text = document.getElementById('text').value
                        let userID = loggedID
                        let newTestimonial = new Testimonial(text, userID)

                        let existingTestimonials = JSON.parse(localStorage.getItem("testimonials"));
                        if (existingTestimonials == null) {
                            existingTestimonials = []
                        }
                        console.log(newTestimonial)
                        localStorage.setItem("newTestimonial", JSON.stringify(newTestimonial));
                        existingTestimonials.push(newTestimonial)
                        localStorage.setItem("testimonials", JSON.stringify(existingTestimonials))
                        location.reload()
                    })
                    //console.log(testimonials)
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