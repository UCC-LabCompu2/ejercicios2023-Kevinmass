console.log("Chingate a tu madre");

function miFuncionSuma(parametro1, parametro2){
    let res;
    res = parametro1 + parametro2;
    return res;
   }
   console.log(miFuncionSuma(2,3)); 
   let edad = 21;
edad >=18 ? console.log('Puede conducir un auto'): console.log('Menor de edad!');  

    const arrayPalabras = ['Laboratorio', 'Computacion', 'Universidad'];
    arrayPalabras.forEach((palabra, index) => {
    console.log(`La palabra ${index} es: ${palabra}`)
    });
var listenerFunction = function(){
    alert('click');
}
function inicialize(){
    document.getElementById('onTimeButton').addEventListener("click",listenerFunction);
    
}

function myEventHandler(eventObj)
{
    console.log(eventObj.target);
     //imprimirá en la consola del objeto DOM que ha activado el evento
    console.log(eventObj.type);
     //Imprimirá en la consola el tipo de evento. 
    console.log(eventObj.cancelable);
     //Imprimiremos en la consola verdadero o falso si podemos detener la propagación de este evento.
}

function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = text;
  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }

  let seMuestra = (nombre) => {
    if (nombre === "Vinicial" || nombre === "Vfinal") {
         document.getElementById('variasCosas1').style.display = 'block';
    } else if (nombre === "NingunaV") {
         document.getElementById('variasCosas1').style.display = 'none';
    } else if (nombre === "Dinicial" || nombre === "Dfinal") {
         document.getElementById('variasCosas2').style.display = 'block';
    }
 }