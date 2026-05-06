function sendWhatsApp(){
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let service = document.getElementById("service").value;

let msg = `Appointment Request:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;

window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);
}