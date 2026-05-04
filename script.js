var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

function sendWhatsApp(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  let msg = "Appointment Request:%0AName: "+name+"%0APhone: "+phone;

  window.open("https://wa.me/919370595129?text="+msg);
}