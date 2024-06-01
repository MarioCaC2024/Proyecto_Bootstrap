function resultado() {
    var cNombre , cApellido , cEmail ;
    cNombre = document.getElementById("nombre").value ;
    cApellido = document.getElementById("apellido").value ;
    cEmail = document.getElementById("email").value ;
    alert("Nombre : " + cNombre + " Apellido : " + cApellido + " Email : " + cEmail) ;
    document.getElementById("resultados").innerText = "Nombre " + cNombre + " Apellido " + cApellido + " Email : " + cEmail ;
}