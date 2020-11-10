window.addEventListener("load", function(){
    let formulario = document.querySelector("form.contact-form")
    formulario.addEventListener("submit", function(e){
        e.preventDefault()
        let campoName = document.querySelector("#fullName")
        let campoEmail = document.querySelector("#email")
        let campoPhone = document.querySelector("#phone")
        let campoPassword = document.querySelector("#password")
        let campoRePassword = document.querySelector("#rePassword")
        let campoCountry = document.querySelector("select")
        let count = 0
        if(campoName.value.length < 2){
            document.querySelector("div.fullName").style.display = "block"
            document.querySelector("div.fullName").innerHTML = "El nombre debe tener al menos 2 caracteres"
            count++;
        } else {
            document.querySelector("div.fullName").innerHTML = ""
        }
        if(campoEmail.value.indexOf("@") == -1 || campoEmail.value.indexOf(".") == -1 || campoEmail.value.indexOf(".") < campoEmail.value.indexOf("@") ) {
            document.querySelector("div.email").style.display = "block"
            document.querySelector("div.email").innerHTML = "Debe ser un email valido"
            count++;
        } else {
            document.querySelector("div.email").innerHTML = ""
        }
        if(campoPhone.value.length < 5 || isNaN(Number(campoPhone.value))){
            document.querySelector("div.phone").style.display = "block"
            document.querySelector("div.phone").innerHTML = "Debe ser un telefono valido"
            count++;
        } else {
            document.querySelector("div.phone").innerHTML = ""
        }
        if(campoPassword.value.length < 8){
            document.querySelector("div.password").style.display = "block"
            document.querySelector("div.password").innerHTML = "La contraseñna debe tener minimo 8 caracteres"
            count++;
        } else {
            document.querySelector("div.password").innerHTML = ""
        }
        if(campoPassword.value != campoRePassword.value){
            document.querySelector("div.rePassword").style.display = "block"
            document.querySelector("div.rePassword").innerHTML = "No coinciden las contraseñas"
            count++;
        } else {
            document.querySelector("div.rePassword").innerHTML = ""
        }
        if(campoCountry.value == ""){
            document.querySelector("div.country").style.display = "block"
            document.querySelector("div.country").innerHTML = "El pais es obligatorio"
            count++;
        } else {
            document.querySelector("div.country").innerHTML = ""
        }
        if(count > 0){
            e.preventDefault()
        } else {
            formulario.submit()
        }

    })
})