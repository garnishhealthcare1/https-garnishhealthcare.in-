let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);


function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  let msg = `Appointment Booking\nName: ${name}\nPhone: ${phone}`;
  window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
}
