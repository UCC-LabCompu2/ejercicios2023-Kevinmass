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
}

//mostrar_ocultar
/**
 * Muestra y oculta un la opcion de elegir comida directo del menu
 * @method Fmuestra
 * @param {string} value valor asignado a cada boton para poder distinguirlos
 * @return 
 */
Fmuestra = (valor) => {
    let Nombre, Email, Telefono, direccion;
    let elems = document.getElementsByClassName('MenuEspecial');
    if (valor == 'BotonDelivery') {
        Nombre = document.getElementById("NameDelivery").value;
        Email = document.getElementById("EmailDelivery").value;
        Telefono = document.getElementById("PhoneDelivery").value;
        direccion = document.getElementById("DirectionDelivery").value;
        localStorage.setItem("NameDeliveryLS", Nombre);
        localStorage.setItem("EmailDeliveryLS", Email);
        localStorage.setItem("PhoneDeliveryLS", Telefono);
        localStorage.setItem("DirectionDeliveryLS", direccion);
        window.open("../paginas/Carta.html", "_self");
        for (let i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
            elems[i].disabled = false;
            }
    } else if (valor == 'BotonMenu') {
        Nombre = localStorage.getItem("NameDeliveryLS");
        Email = localStorage.getItem("EmailDeliveryLS");
        Telefono = localStorage.getItem("PhoneDeliveryLS");
        direccion = localStorage.getItem("DirectionDeliveryLS");
        document.getElementById("NameDelivery").value = Nombre;
        document.getElementById("EmailDelivery").value = Email;
        document.getElementById("PhoneDelivery").value = Telefono;
        document.getElementById("DirectionDelivery").value = direccion;
        window.open("../paginas/Delivery.html", "_self");
        for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
        elems[i].disabled = true;
        }
    }
}