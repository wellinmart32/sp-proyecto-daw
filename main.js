$(document).ready(function() {
    $("#foo").slideUp(300).delay(10000).fadeIn(400);
});

var boton_iniciar_sesion = document.getElementById("boton-iniciar-sesion");
var modal_iniciar_sesion = document.getElementById("modal-iniciar-sesion");
var cierre_ingreso = document.getElementById("cierre-ingreso");
var boton_confirmar_ingreso = document.getElementById("boton-confirmar-ingreso");
var modal_datos_incorrectos = document.getElementById("modal-datos-incorrectos");
var cierre_datos_incorrectos = document.getElementById("cierre-datos-incorrectos");
var boton_aceptar = document.getElementById("boton-aceptar");

boton_iniciar_sesion.onclick = function() {
    modal_iniciar_sesion.style.display = "block";
}

cierre_ingreso.onclick = function() {
    modal_iniciar_sesion.style.display = "none";
}

boton_confirmar_ingreso.onclick = function() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var roles = document.getElementById("roles");
    var rol = roles.options[roles.selectedIndex].text;
    if (usuario != "" & password != "") {
        if (usuario == "wmartine32" & password == "abc" & rol == "Cliente") {
            var win = window.open("paciente.html", "_blank");
            win.focus();
            modal_iniciar_sesion.style.display = "none";
        }else if (usuario == "wmartine23" & password == "acb" & rol == "Operario") {
            var win = window.open("operario.html", "_blank");
            win.focus();
            modal_iniciar_sesion.style.display = "none";
        }else if (usuario == "wmartine" & password == "bca" & rol == "Laboratorista") {
            var win = window.open("laboratorista.html", "_blank");
            win.focus();
            modal_iniciar_sesion.style.display = "none";
        }else {
            modal_datos_incorrectos.style.display = "block";
        }
    }
}

cierre_datos_incorrectos.onclick = function() {
    modal_ingreso_exitoso.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal_iniciar_sesion) {
        modal_iniciar_sesion.style.display = "none";
    }
}

boton_aceptar.onclick = function() {
    modal_datos_incorrectos.style.display = "none";
}
