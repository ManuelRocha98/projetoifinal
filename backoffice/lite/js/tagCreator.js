//Variáveis Globais:
let tags = []

//Vai servir para saber se há alguém com sessão iniciada ou não
let logged = JSON.parse(localStorage.getItem("logged"))

//Vai simplificar saber qual é o indice no array users do utilizador loggado
let indexUser = 0



//------------------------------------------

window.onload = function () {

    let userss = JSON.parse(localStorage.getItem("users"))
    let userType = 3
    loggedID = JSON.parse(localStorage.getItem("loggedID"))
    console.log(loggedID)
    for (i = 0; i < userss.length; i++) {

        if (loggedID == userss[i].id - 1) {
            console.log("aqui")
            userType = userss[i].usertype
        }

    }
    console.log(userType)
    if (!logged || (logged && userType != 0)) {
        window.location.replace("../../index.html")
        //console.log("fds")
        console.log(logged)
        console.log(userType)
    }

    //Inserir dados na tabela das tags
    let tags = JSON.parse(localStorage.getItem("tags"));
    let LastID = tags.length
    let text = "";
    if (tags != null) {
        for (i = 0; i < tags.length; i++) {
            text += "<tr>"
            text += "<td>" + tags[i].name + "</td></tr>"
        }
    }
    document.getElementById("tableValues").innerHTML = text

    class Tag {
        constructor(name, id) {
            this.name = name
            this.id = id
        }

    }




    //Criar categoria

    let tagForm = document.getElementById('createTag')
    lastID =
        tagForm.addEventListener('click', function () {

            let name = document.getElementById('name').value
            let id = LastID + 1
            let newTag = new Tag(name, id)

            let existingTags = JSON.parse(localStorage.getItem("tags"));
            if (existingTags == null) {
                existingTags = [];
            }
            console.log(newTag)
            localStorage.setItem("newTag", JSON.stringify(newTag));
            existingTags.push(newTag)
            localStorage.setItem("tags", JSON.stringify(existingTags))
            location.reload()
        })
    console.log(tags)
}