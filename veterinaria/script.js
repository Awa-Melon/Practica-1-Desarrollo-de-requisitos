function solicitarCita(){


let nombre=document.getElementByID("nombre").value;
let mascota=document.getElementByID("mascota").value;
let fecha=document.getElementByID("fecha").value;

document.getElementById("mensaje").innerHTML=
"Cita Solicitada para" + mascota +"por" + nombre + 
"el dia" + fecha;
}
