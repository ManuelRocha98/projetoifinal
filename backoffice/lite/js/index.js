//Variáveis Globais:
let tags = []
//Vai servir para saber se há alguém com sessão iniciada ou não
let logged = JSON.parse(localStorage.getItem("logged"))

//Vai simplificar saber qual é o indice no array users do utilizador loggado
let indexUser = 0

let courses = []

let tags2 = []

//------------------------------------------

window.onload = function () {


    //Inserir dados na tabela dos users
    let users = JSON.parse(localStorage.getItem("users"))

    let text2 = ""
    if (users != null) {
        for (i = 0; i < users.length; i++) {
            text2 += "<tr>"
            text2 += "<td>" + users[i].id + "</td>"
            text2 += "<td>" + users[i].user + "</td>"
            text2 += "<td>" + users[i].email + "</td>"
            text2 += "<td>" + users[i].pass + "</td>"
            text2 += "<td>" + users[i].usertype + "</td>"
            text2 += "</tr>"
        }
    }
    document.getElementById("tableValues2").innerHTML = text2


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


    //console.log(courses)
    class Course {
        constructor(title, desc, iniDate, endDate, price, specialPrice, professorCode, partner, tags2, id, img) {
            this.title = title
            this.desc = desc
            this.iniDate = iniDate
            this.endDate = endDate
            this.price = price
            this.specialPrice = specialPrice
            this.professorCode = professorCode
            this.partner = partner
            this.tags2 = tags2
            this.id = id
            this.img = img
        }
    }

    //Inserir dados no dropdown
    let tags = JSON.parse(localStorage.getItem("tags"))
    let coursess = JSON.parse(localStorage.getItem("courses"))
    if (!Array.isArray(coursess) || coursess.length == 0) {
        LastID = 0
    } else {
        LastID = coursess.length
    }

    console.log(LastID)
    let tagValues = ""
    for (i = 0; i < tags.length; i++) {
        tagValues += "<option value='" + tags[i].name + "'>" + tags[i].name + "</option>"
    }
    document.getElementById("dropdownTags").innerHTML = tagValues

    //Criar curso

    let registerCourse = document.getElementById('newCourseButton')


    document.getElementById("newCourseButton").onclick = function () {


        let title = document.getElementById('title').value
        let desc = document.getElementById('desc').value
        let iniDate = document.getElementById('iniDate').value
        let endDate = document.getElementById('endDate').value
        let price = document.getElementById('price').value
        let specialPrice = document.getElementById('specialPrice').value
        let professorCode = document.getElementById('professorCode').value
        let partner = document.getElementById('partner').value
        let img = document.getElementById('img').value
        let id = LastID + 1
        let allTags = []
        let options = dropdownTags && dropdownTags.options
        let opt;


        for (let i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i]

            if (opt.selected) {
                allTags.push(opt.value || opt.text);
            }
        }




        console.log(allTags)
        /* let selectedValues = ""
        for (i = 0; i < tags.length; i++) {
            selectedValues += tags[i] + ";"
        }   */

        let newCourse = new Course(title, desc, iniDate, endDate, price, specialPrice, professorCode, partner, allTags, id, img)
        let existingCourses = JSON.parse(localStorage.getItem("courses"));
        if (existingCourses == null) {
            existingCourses = []
        }
        localStorage.setItem("newCourse", JSON.stringify(newCourse));
        existingCourses.push(newCourse)
        localStorage.setItem("courses", JSON.stringify(existingCourses))

        console.log(newCourse)
        location.reload()


    }




}

