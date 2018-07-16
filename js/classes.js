//---------------------------------------------- Classes ----------------------------------------------------------------------------------------
//Isto mal possa vai para um ficheiro à parte, Done alalalalalalalalalalalalalala
class User {
    constructor(user, pass, email, tipouser) { //Por agora vai ficar assim, não é dificil de acrescentar merdas
        this.user = user
        this.pass = pass
        this.email = email
        this.tipouser = tipo //Vai distinguir se o utilizador é Estudante ou docente

        
    } //Para o Docente, falta o short CV, Unidades Curriculares, e a Formação

    //Estes três campos vão ter que ser metidos na classe depois de se criar o objeto
    
    get user() {
        return this._nome
    }

    set user(valor) {
        this._nome = valor
    }

    get pass() {
        return this._password
    }

    set pass(valor) {
        this._password = valor
    }

    get email() {
        return this._mail
    }

    set email(valor) {
        this._mail = valor
    }


    get tipouser() {
        return this._tipo
    }

    set tipouser(valor) {
        this._tipo = valor
    }
}
//Variavel que tem que ser mudada no projeto2.js
let primeiro = true