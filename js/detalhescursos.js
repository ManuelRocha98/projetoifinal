let loggedID = JSON.parse(localStorage.getItem('loggedID'))
let logged = JSON.parse(localStorage.getItem("logged"))

console.log(loggedID)



window.onload = function () {

    let courseID = ""

    if (logged) {
        let btnLogin = document.getElementById('btnModal')
        btnLogin.style.display = "none"
        let btnRegistar = document.getElementById('btnModal2')
        btnRegistar.style.display = "none"
        let btnLogout = document.getElementById('btnLogout')
        btnLogout.style.display = "inline-block"
        let btnPerfil = document.getElementById('btnPerfil')
        btnPerfil.style.display = "inline-block"

        document.getElementById("createComment").disabled = false
        document.getElementById("createComment").title = "Enviar"
        
    }


    


    class Comment {
        constructor(text, userID, courseID) {
            this.text = text
            this.userID = userID
            this.courseID = courseID
        }

    }




    //Buscar curso selecionado ao URL
    var chosenCourse = decodeURIComponent(window.location.search)
    //Retirar ? para ter o título do curso direito
    chosenCourse = chosenCourse.substring(1);
    let courses = JSON.parse(localStorage.getItem("courses"))
    console.log(chosenCourse)


    
    for (i = 0; i < courses.length; i++) {
        console.log(courses[i].title)
        console.log(chosenCourse)
        console.log(courses[0].id)
        if (courses[i].title == chosenCourse) {
            courseID = courses[i].id
        }
    }
    console.log("courseID: " + courseID)

    //Inserir curso na página 

    let coursesValues = ""
    let tags = ""
    let partnership = ""
    let partnername = ""
    for (i = 0; i < courses.length; i++) {
        if (chosenCourse == courses[i].title) {
            console.log(courses[i].partner)
            if (courses[i].partner == "") {
                partnership = "Não tem"
            } else {
                partnership = courses[i].partner
                let partners = JSON.parse(localStorage.getItem("partners"))
                console.log(partnership)
                partnername = partners[partnership].name
            }
            coursesValues = "<br><br><br><h2>" + courses[i].title + "</h2><p>" + courses[i].desc + "</p><ul><li><strong>Preço para estudante/membro IPP: " + courses[i].specialPrice + "€</strong></li><li>Preço regular: " + courses[i].price + "€</li><li>Início: " + courses[i].iniDate + "</li><li>Fim: " + courses[i].endDate + "</li><li>Código de docente: " + courses[i].professorCode + "</li>" + "</li><li>Parceria: " + partnername + "</li><li>Tags: " + courses[i].tags2 + "</li></ul>"

            document.getElementById("imgCourse").src = courses[i].img
        }


    }
    document.getElementById("courseData").innerHTML = coursesValues



    //Mostrar comentários
    let comments = JSON.parse(localStorage.getItem("comments"))
    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    let text = ""
    
    console.log("teste")
    let userName = ""
    if (comments != null) {


        for (i = 0; i < comments.length; i++) {
            console.log(comments[i].courseID)
            console.log(courseID)
            if (comments[i].courseID == courseID) {
                console.log(comments.length)
                let userID = comments[i].userID
                console.log(userID)
                for (j = 0; j < users.length; j++) {
                    if(users[j].id == userID + 1){
                        userName = users[j].user
                    }
                }
                userName = 
                text += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><br><img src=\"" + users[userID].img + "\" class=\"rounded-circle\" width=\"100\" height=\"100\"><br><br><h4 class=\"card-title\">" + userName + "</h4><p class=\"card-text\">" + comments[i].text + "</p><br></div></div></div></div></div>"
            }
            document.getElementById("commentValues").innerHTML = text
        }
    }









    //Login

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

    let commentButton = document.getElementById('createComment')
    //INSERIR COMENTÁRIO
    commentButton.addEventListener('click', function () {

        let text = document.getElementById('comment').value
        let userID = loggedID
        let courseIDD = courseID
        let newComment = new Comment(text, userID, courseIDD)

        let existingComments = JSON.parse(localStorage.getItem("comments"))
        if (existingComments == null) {
            existingComments = []
        }

        console.log(newComment)
        localStorage.setItem("newComment", JSON.stringify(newComment))
        existingComments.push(newComment)
        localStorage.setItem("comments", JSON.stringify(existingComments))
        location.reload()
        
    })
}