/**
 * Carga el contenido de el footer una vez agregado al resto de paginas
 * @method CargarLocalStorage
 * @return 
 */

CargarLocalStorage = () => {
    let Nombre, Email, Telefono, nota;
    Nombre = localStorage.getItem("NombreLS");
    Email = localStorage.getItem("EmailLS");
    Telefono = localStorage.getItem("TelefonoLS");
    nota = localStorage.getItem("notaLS");
    document.getElementById("Nombre").value = Nombre;
    document.getElementById("Email").value = Email;
    document.getElementById("Telefono").value = Telefono;
    document.getElementById("Nota").value = nota;
}

/**
 * Guarda el contenido del footer
 * @method GuardarLocalStorage
 * @return 
 */

GuardarLocalStorage = () => {
    let Nombre, Email, Telefono, nota;
    Nombre = document.getElementById("Nombre").value;
    Email = document.getElementById("Email").value;
    Telefono = document.getElementById("Telefono").value;
    nota = document.getElementById("Nota").value;
    localStorage.setItem("NombreLS", Nombre);
    localStorage.setItem("EmailLS", Email);
    localStorage.setItem("TelefonoLS", Telefono);
    localStorage.setItem("notaLS", nota);
    document.getElementById("Nombre").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Telefono").value = "";
    document.getElementById("Nota").value = "";
    document.getElementById("EnviadoContacto").style.display = "block";
}

//mostrar_ocultar
/**
 * Muestra y oculta un la opcion de elegir comida directo del menu
 * @method Fmuestra
 * @param {string} valor valor asignado a cada boton para poder distinguirlos
 * @return 
 */
Fmuestra = (valor) => {
    let Nombre, Email, Telefono, direccion, llave;
    if (valor === 'BotonDelivery') {
        Nombre = document.getElementById("NameDelivery").value;
        Email = document.getElementById("EmailDelivery").value;
        Telefono = document.getElementById("PhoneDelivery").value;
        direccion = document.getElementById("DirectionDelivery").value;
        localStorage.setItem("NameDeliveryLS", Nombre);
        localStorage.setItem("EmailDeliveryLS", Email);
        localStorage.setItem("PhoneDeliveryLS", Telefono);
        localStorage.setItem("DirectionDeliveryLS", direccion);
        llave = '1';
        localStorage.setItem("LlaveLS", llave);
        console.log(localStorage.getItem("NameDeliveryLS"));
        window.open("../paginas/Carta.html", "_self");
    } else if (valor === 'BotonMenu') {
        llave = null;
        localStorage.setItem("LlaveLS", llave);
        window.open("../paginas/Delivery.html", "_self");
    }
}

//DeliveryOnload
/**
 * Funcion que sirve como intermediario entre la carta y el delivery
 * @method DeliveryOnload
 * @return 
 */
DeliveryOnload = () => {
    let Nombre, Email, Telefono, direccion;
    if (localStorage.getItem("LlaveLS") === null) {
        document.getElementById("NameDelivery").value = "";
        document.getElementById("EmailDelivery").value = "";
        document.getElementById("PhoneDelivery").value = "";
        document.getElementById("DirectionDelivery").value = "";
    } else if (localStorage.getItem("LlaveLS") === '1') {
        Nombre = localStorage.getItem("NameDeliveryLS");
        Email = localStorage.getItem("EmailDeliveryLS");
        Telefono = localStorage.getItem("PhoneDeliveryLS");
        direccion = localStorage.getItem("DirectionDeliveryLS");
        document.getElementById("NameDelivery").value = Nombre;
        document.getElementById("EmailDelivery").value = Email;
        document.getElementById("PhoneDelivery").value = Telefono;
        document.getElementById("DirectionDelivery").value = direccion;
    }
}

//CartaOnload
/**
 * Funcion que sirve como intermediario entre la carta y el delivery
 * @method CartaOnload
 * @return 
 */
CartaOnload = () => {
    const inputs = document.querySelectorAll('table.tablamenu input');
    console.log(localStorage.getItem("LlaveLS"));
    if (localStorage.getItem("LlaveLS") === null) {
        inputs.forEach(input => {
            input.style.display = "none";
        });
        document.getElementById('BotonDelivery').style.display = "none";
    } else if (localStorage.getItem("LlaveLS") === '1') {
        inputs.forEach(input => {
            input.style.display = "block";
        });
        document.getElementById('BotonDelivery').style.display = "block";
    }
}

//Chequeo de datos
/**
 * Funcion que dependiendo del id que se le pase, hará una operación u otra
 * @method ChequeoValores 
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @param {string} tipo tipo de variable que se requiere
 * @return 
 */
ChequeoValores = (id, valor, tipo) => {
    if (tipo === 'numero') {
        if (isNaN(valor)) {
            alert("Introducir un número, por favor");
            document.getElementById(id).value = "";
        }
    }
}