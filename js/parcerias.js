let users = JSON.parse(localStorage.getItem("users"))




function GoogleMapsURLToEmbedURL(GoogleMapsURL) {
    var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
    if (coords != null) {
        let coordsArray = coords[1].split(',');
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d" + coordsArray[1] + "!3d" + coordsArray[0] + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098"
    }
}






window.onload = function () {

    let logged = JSON.parse(localStorage.getItem("logged"))
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

    //Inserir dados na tabela
    
    let loggedID = JSON.parse(localStorage.getItem("loggedID"))
    let partners = JSON.parse(localStorage.getItem("partners"))
    let users = JSON.parse(localStorage.getItem("users"))
    let LastID = partners.length
    let text = ""
    let embed = ""
    if (partners != null) {
        for (i = 0; i < partners.length; i++) {
            let mapLink = partners[i].mapLink
            let websiteLink = partners[i].websiteLink
            text += "<tr><td>" + partners[i].name + "</td>"
            text += "<td><a href=" + mapLink + ">Localização</td>"
            text += "<td><a href=" + websiteLink + ">Website</td></tr>"
        }
        document.getElementById("tableValues").innerHTML = text
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








    class Partner {
        constructor(name, mapLink, websiteLink, id) {
            this.name = name
            this.mapLink = mapLink
            this.websiteLink = websiteLink
            this.id = id
        }

    }


}