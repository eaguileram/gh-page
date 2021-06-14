// defino una variable men que trae el elemento menú
var men = document.getElementById('menu');
// inserto los links del menú
men.insertAdjacentHTML('beforeend', '\
    <a href="/">Inicio</a>\
    <a href="acercade.html">Acerca de</a>\
    <a href="/contacto.html">Contacto</a>');

function ValidarNombre() {
        var nombre = document.getElementById("nombre").value;
    
        //evaluo nombre
    
        if (nombre.length < 3) {
            document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto";
        } else {
            document.getElementById("msgNombre").innerText = "";
        }
}
    
function ValidarEmail() {
        var correos = document.getElementById("correo").value;
    
        //evaluo correo
    
        if (correos.length > 0) {
            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(correos)) {
                document.getElementById("msgCorreo").innerText = "Ingrese un correo correcto";
            } else {
                document.getElementById("msgCorreo").innerText = "";
            }
        } else {
        document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
    }
}

function ValidarMensaje() {
    var mensaje = document.getElementById("mensaje").value;

    //evaluo mensaje

    if (mensaje.length < 10) {
        document.getElementById("msgMensaje").innerText = "El mensaje debe terner mínimo 10 caracteres.";
    } else {
        document.getElementById("msgMensaje").innerText = "";
    }
}

var arreglopersona = [];

function ValidarFormulario() {

    let datos = new Object();

    let nombreV = false;
    let correoV = false;
    let mensajeV = false;

    var nombre = document.getElementById("nombre").value;
    var correos = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    //debugger;

    //evaluo si nombre tiene texto

    if (nombre.length < 3) {
        document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto";
    } else {
        document.getElementById("msgNombre").innerText = "";
        datos["Nombre"] = nombre;
        nombreV = true;

    }


    //evaluo correo

    if (correos.length > 0) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(correos)) {
            document.getElementById("msgCorreo").innerText = "Ingrese un correo correcto";
        } else {
            document.getElementById("msgCorreo").innerText = "";
            datos["Correos"] = correos;
            correoV = true;
        }
    } else {
        document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
    }


    //evaluo mensaje

    if (mensaje.length < 10) {
        document.getElementById("msgMensaje").innerText = "El mensaje debe terner mínimo 10 caracteres.";
    } else {
        document.getElementById("msgMensaje").innerText = "";
        datos["Mensajes"] = mensaje;
        mensajeV = true;
    }
 
    if ( nombreV == true && correoV == true && mensajeV == true){
        console.log('todos los datos están ok ;)');
        arreglopersona.push(datos);
        console.log(arreglopersona);
        let form = document.getElementById("form");
        form.style.display = "none";
        let titulo = document.getElementById("ft");
        titulo.style.display = "none";
        let msr = document.getElementById("mrcpt");
        msr.style.display = "block";
    }

}

