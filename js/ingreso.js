function valida() {

    const mailHardCodeado = "admin@admin.com";
    const passwordHardCodeado = "admin" ;

    var obtenerMailForm = document.getElementById("email").value ;
    var obtenerPswForm = document.getElementById("psw").value ;

    if(mailHardCodeado == obtenerMailForm && 
        passwordHardCodeado == obtenerPswForm
     ){
            alert("Las credenciales son correctas")
      } else {
           alert("Las credenciales son incorrectas")
        }
}