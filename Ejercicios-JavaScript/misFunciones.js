/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */


//Conversor de unidades
/**
 * Funcion que dependiendo del id que se le pase, hará una operación u otra
 * @method cambioValores 
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @return 
 */
function cambioValores(id, valor) {
    if (isNaN(valor)) {
        alert("Introducir un número, por favor");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.0833333;
        document.lasUnidades.unid_yarda.value = valor * 0.0277778;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor * 0.333333;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
    }
}

/**
 * version de cambioValores refactorizada
 * @method convertirUnidades 
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @return 
 */
convertirUnidades = (id, valor) => {
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor * 0.0254;
        pul = valor;
        pie = valor * 0.0833333;
        yar = valor * 0.0277778;
    }
    else if (id === "pie") {
        met = valor * 0.3048;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);
}

//Conversor de unidades 2
/**
 * version 2 de convertirUnidades
 * @method convertirUnidades 
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @return 
 */
convertirUnidades2 = (id, valor) => {
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor * 0.0254;
        pul = valor;
        pie = valor * 0.0833333;
        yar = valor * 0.0277778;
    }
    else if (id === "pie") {
        met = valor * 0.3048;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yar * 100) / 100;
}

//Conversor de grados a radianes
/**
 * Funcion que transforma valores dados a su equivalente en radianes y viceversa
 * @method cambioRadianes
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @return 
 */
function cambioRadianes(id, valor) {
    if (isNaN(valor)) {
        alert("Introducir un número, por favor");
        document.lasUnidades.unid_radian.value = "";
    }
    else if (id == "grados") {
        document.Unidades.unid_radianes.value = valor * (Math.PI / 180);
    }
    else if (id == "radianes") {
        document.Unidades.unid_grados.value = valor * (180 / Math.PI);
    }
}

/**
 * version refactorizada de cambioRadianes
 * @method cambioRadianes 
 * @param {string} id  id de los elementos en el html
 * @param {number} valor  valor ingresado
 * @return 
 */
cambioRadianes = (id, valor) => {
    let rad, gra;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if (isNaN(valor)) {
        alert("Introducir un número, por favor");
        document.lasUnidades.unid_radian.value = "";
    }
    else if (id == "grados") {
        rad = valor * (Math.PI / 180);
        gra = valor;
    }
    else if (id == "radianes") {
        rad = valor;
        gra = valor * (180 / Math.PI);
    }
    document.Unidades.unid_radianes.value = rad;
    document.Unidades.unid_grados.value = gra;
}

//mostrar_ocultar
/**
 * Muestra y oculta un div especifico
 * @method Fmuestra
 * @param {string} value valor asignado a los elementos en el html
 * @return 
 */
Fmuestra = (valor) => {
    if (valor === "val_mostrar") {
        document.getElementById('DivEspecifico').style.display = "block";
    } else if (valor === "val_ocultar") {
        document.getElementById('DivEspecifico').style.display = "none";
    }
}

//operaciones matematicas
/**
 * realiza las operaciones matematicas dependiendo del input seleccionado
 * @method OpMatematicas
 * @param {string} nombre nombre del input seleccionado en el html
 * @return 
 */
OpMatematicas = (nombre) => {
    let sum, res, mul, div, num1, num2;
    if (nombre == "suma") {
        num1 = Number(document.getElementById("nums1").value);
        num2 = Number(document.getElementById("nums2").value);
        sum = num1 + num2;
        document.getElementsByName("sum_total")[0].value = sum;
    }
    if (nombre == "resta") {
        num1 = Number(document.getElementById("numr1").value);
        num2 = Number(document.getElementById("numr2").value);
        sum = num1 - num2;
        document.getElementsByName("res_total")[0].value = sum;
    }
    if (nombre == "multi") {
        num1 = Number(document.getElementById("numm1").value);
        num2 = Number(document.getElementById("numm2").value);
        sum = num1 * num2;
        document.getElementsByName("mul_total")[0].value = sum;
    }
    if (nombre == "divi") {
        num1 = Number(document.getElementById("numd1").value);
        num2 = Number(document.getElementById("numd2").value);
        sum = num1 / num2;
        document.getElementsByName("div_total")[0].value = sum;
    }

}

//operaciones matematicas 2
/**
 * realiza las operaciones matematicas dependiendo del input seleccionado, version 2
 * @method OpMatematicas2
 * @param {string} nombre nombre del input seleccionado en el html
 * @return 
 */
OpMatematicas2 = (nombre) => {
    let sum, res, mul, div, num1, num2;
    if (nombre == "suma") {
        num1 = Number(document.getElementById("nums1").value);
        num2 = Number(document.getElementById("nums2").value);
        sum = num1 + num2;
        document.getElementsByName("sum_total")[0].innerHTML = sum;
    }
    if (nombre == "resta") {
        num1 = Number(document.getElementById("numr1").value);
        num2 = Number(document.getElementById("numr2").value);
        sum = num1 - num2;
        document.getElementsByName("res_total")[0].innerHTML = sum;
    }
    if (nombre == "multi") {
        num1 = Number(document.getElementById("numm1").value);
        num2 = Number(document.getElementById("numm2").value);
        sum = num1 * num2;
        document.getElementsByName("mul_total")[0].innerHTML = sum;
    }
    if (nombre == "divi") {
        num1 = Number(document.getElementById("numd1").value);
        num2 = Number(document.getElementById("numd2").value);
        sum = num1 / num2;
        document.getElementsByName("div_total")[0].innerHTML = sum;
    }

}


//segunda web parte1
/**
 * parte uno de la funcion que carga la segunda web, esta envia los datos a la segunda parte
 * @method CargaWeb
 * @return 
 */
CargaWeb = () => {
    let cant, unidad, URLc;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    URLc = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(URLc);
}

//segunda web parte2
/**
 * parte dos de la funcion que carga la segunda web, esta recibe los resultados de la otra
 * @method CargaRes
 * @return 
 */
CargaRes = () => {
    let URLc, ca, un;
    URLc = window.location.href.split("/")[11];
    ca = URLc.split("#")[1];
    un = URLc.split("#")[2];
    document.getElementById("dist").value = ca + " " + un;
}

//primera web parte1 segunda version
/**
 * parte uno de la funcion que carga la segunda web, esta guarda los valores en el local storage
 * @method GuardarLocalStorage
 * @return 
 */
GuardarLocalStorage = () => {
    let cant, unidad;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("cantidadLS", cant);
    localStorage.setItem("unidadLS", unidad);
    window.open("segundaWeb2.html");
}

//segunda web parte2 segunda version
/**
 * parte dos de la funcion que carga la segunda web, esta recibe los valores del local storage
 * @method CargarLocalStorage()
 * @return 
 */
CargarLocalStorage = () => {
    let cant, unidad;
    cant = localStorage.getItem("cantidadLS");
    unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = cant + " " + unidad;
}