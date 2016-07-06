
var seleccion = 0;
var botones_principales = document.getElementById("botones-principales");
var boton_estadisticas = document.getElementById("boton-estadisticas");
var btn_ingresar_muestra = document.getElementById("btn-ingresar-muestra");
var btn_modificar_muestra = document.getElementById("btn-modificar-muestra");
var btn_eliminar_muestra = document.getElementById("btn-eliminar-muestra");
var btn_generar_reporte_estadistico = document.getElementById("btn-generar-reporte-estadistico");
var informacion_muestra = document.getElementById("informacion-muestra");
var btn_generar_codigo_barras = document.getElementById("btn-generar-codigo-barras");
var contenedor_codigo_barras = document.getElementById("contenedor-codigo-barras");
var btn_confirmar_datos = document.getElementById("btn-confirmar-datos");
var btn_volver_de_datos = document.getElementById("btn-volver-de-datos");
var seleccion_muestra = document.getElementById("seleccion-muestra");
var btn_confirmar_seleccion = document.getElementById("btn-confirmar-seleccion");
var btn_volver_de_seleccion = document.getElementById("btn-volver-de-seleccion");
var pantalla_reporte_estadistico = document.getElementById("pantalla-reporte-estadistico");
var btn_confirmar_reporte = document.getElementById("btn-confirmar-reporte");
var btn_volver_de_reporte = document.getElementById("btn-volver-de-reporte");
var reporte = document.getElementById("reporte");
var mensaje_informacion = document.getElementById("mensaje-informacion");
var cierre_mensaje_informacion = document.getElementById("cierre-mensaje-informacion");
var boton_aceptar = document.getElementById("boton-aceptar");

function reiniciar_datos() {
	document.getElementById("codigo").value = "";
	document.getElementById("nombre-paciente").value = "";
	document.getElementById("centro").value = "";
	document.getElementById("fecha").value = "";
	document.getElementById("examenes").selectedIndex = "0";
	document.getElementById("laboratorios").selectedIndex = "0";
	document.getElementById("codigo-barras").value = "";
	document.getElementById("contenedor-codigo-barras").style.display = "none";
}

function reiniciar_seleccion() {
	document.getElementById("muestras").selectedIndex = "0";
}

function colocar_valores(v1, v2, v3, v4, v5, v6, v7) {
	document.getElementById("codigo").value = v1;
	document.getElementById("nombre-paciente").value = v2;
	document.getElementById("centro").value = v3;
	document.getElementById("fecha").value = v4;
	document.getElementById("examenes").selectedIndex = v5;
	document.getElementById("laboratorios").selectedIndex = v6;
	document.getElementById("codigo-barras").value = v7;
	document.getElementById("imagen-codigo-barras").src = "http://barcode.tec-it.com/barcode.ashx?data=" +
	v7 + "&code=Code128&dpi=96";	
	document.getElementById("contenedor-codigo-barras").style.display = "block";	
}

function procedimiento_modificar() {
	var muestra = document.getElementById("muestras").selectedIndex;
	if (muestra === 0) {
		colocar_valores("mue01", "Tomas Miranda", "Sucursal de Quito", "13/02/2015", "2", "3", "ABC-ahj-2243");	
	}else if (muestra === 1) {
		colocar_valores("mue02", "Clara Alcazar", "Sucursal de Guayaquil", "02/05/2016", "1", "4", "HTY-dgk-5732");	
	}else {
		colocar_valores("mue03", "Carlos Costa", "Sucursal de Milagro", "25/09/2016", "3", "4", "YES-fhj-1128");	
	}
	informacion_muestra.style.display = "block";
	seleccion_muestra.style.display = "none";
	botones_principales.style.display = "none";
	boton_estadisticas.style.display = "none";
}

function procedimiento_eliminar() {
	mensaje_informacion.style.display = "block";
	seleccion_muestra.style.display = "none";
	botones_principales.style.display = "block";
	boton_estadisticas.style.display = "block";
}

function componer_mensaje(tipo) {
	if (tipo === 1) {
		document.getElementById("titulo-mensaje").value = "Informacion";
		document.getElementById("contenido-mensaje").value = "Ingreso de informacion exitoso";
		document.getElementById("imagen-mensaje").src = "Informacion.png";
		alert(document.getElementById("titulo-mensaje").value);
	}else if (tipo === 2) {
		document.getElementById("titulo-mensaje").value = "Informacion";
		document.getElementById("contenido-mensaje").value = "Informacion eliminada correctamente";
		document.getElementById("imagen-mensaje").src = "Informacion.png";
		alert(document.getElementById("titulo-mensaje").value);
	}else {
		document.getElementById("titulo-mensaje").value = "Advertencia";
		document.getElementById("contenido-mensaje").value = "Debe llenar todos los campos";
		document.getElementById("imagen-mensaje").src = "Advertencia.png";
		alert(document.getElementById("titulo-mensaje").value);
	}
}

btn_ingresar_muestra.onclick = function() {
	seleccion = 1;
	informacion_muestra.style.display = "block";
	botones_principales.style.display = "none";
	boton_estadisticas.style.display = "none";
}

btn_generar_codigo_barras.onclick = function() {
	var codigo_barras = document.getElementById("codigo-barras").value;
	if (codigo_barras != "") {
		contenedor_codigo_barras.style.display = "block";
		document.getElementById("imagen-codigo-barras").src = "http://barcode.tec-it.com/barcode.ashx?data=" +
		codigo_barras + "&code=Code128&dpi=96";
	}
}

btn_confirmar_datos.onclick = function() {
	reiniciar_datos();
	componer_mensaje(1);
	informacion_muestra.style.display = "none";
	botones_principales.style.display = "block";
	boton_estadisticas.style.display = "block";
	mensaje_informacion.style.display = "block";
}

btn_volver_de_datos.onclick = function() {
	reiniciar_datos();
	informacion_muestra.style.display = "none";
	botones_principales.style.display = "block";
	boton_estadisticas.style.display = "block";
}

btn_modificar_muestra.onclick = function() {
	seleccion = 2;
	seleccion_muestra.style.display = "block";
	botones_principales.style.display = "none";
	boton_estadisticas.style.display = "none";
}

btn_confirmar_seleccion.onclick = function() {
	if (seleccion === 2) {
		componer_mensaje(1);
		procedimiento_modificar();
	}else if (seleccion === 3) {
		componer_mensaje(2);
		procedimiento_eliminar();
	}
}

btn_volver_de_seleccion.onclick = function() {
	reiniciar_seleccion();
	seleccion_muestra.style.display = "none";
	botones_principales.style.display = "block";
	boton_estadisticas.style.display = "block";
}

btn_eliminar_muestra.onclick = function() {
	seleccion = 3;
	seleccion_muestra.style.display = "block";
	botones_principales.style.display = "none";
	boton_estadisticas.style.display = "none";
}

btn_generar_reporte_estadistico.onclick = function() {
	seleccion = 4;
	pantalla_reporte_estadistico.style.display = "block";
	botones_principales.style.display = "none";
	boton_estadisticas.style.display = "none";	
}

btn_confirmar_reporte.onclick = function() {
	var forma = document.getElementById("forma-reporte").selectedIndex;
	var datos = document.getElementById("datos-reporte").selectedIndex;
	var url = document.getElementById("reporte").src;
	if (forma === 0) {
		if (datos === 0) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=bhg&chco=e5f867|aaaaaa|596605&chd=t:70,20,10&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%283+elementos%29";
		}else if (datos === 1) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=bhg&chco=e5f867|aaaaaa|596605&chd=t:55,33,12&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%253+elementos%45";
		}else if (datos === 2) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=bhg&chco=e5f867|aaaaaa|596605&chd=t:30,30,40&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%253+elementos%19";
		}else {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=bhg&chco=e5f867|aaaaaa|596605&chd=t:36,24,40&chdl=Milagro+%286+elementos%29|Quito%281+elementos%32|Guayaquil+%283+elementos%45";
		}
	}else {
		if (datos === 0) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=p&chco=e5f867|aaaaaa|596605&chd=t:70,20,10&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%283+elementos%29";
		}else if (datos === 1) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=p&chco=e5f867|aaaaaa|596605&chd=t:55,33,12&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%253+elementos%45";
		}else if (datos === 2) {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=p&chco=e5f867|aaaaaa|596605&chd=t:30,30,40&chdl=Milagro+%286+elementos%29|Quito%281+elementos%29|Guayaquil+%253+elementos%19";
		}else {
			url = "http://chart.apis.google.com/chart?chs=400x100&cht=p&chco=e5f867|aaaaaa|596605&chd=t:36,24,40&chdl=Milagro+%286+elementos%29|Quito%281+elementos%32|Guayaquil+%283+elementos%45";
		}	
	}
	reporte.style.display = "block";
}

btn_volver_de_reporte.onclick = function() {
	pantalla_reporte_estadistico.style.display = "none";
	botones_principales.style.display = "block";
	boton_estadisticas.style.display = "block";	
}

cierre_mensaje_informacion.onclick = function() {
    mensaje_informacion.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == mensaje_informacion) {
        mensaje_informacion.style.display = "none";
    }
}

boton_aceptar.onclick = function() {
    mensaje_informacion.style.display = "none";
}
