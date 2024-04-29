
//loarder
window.onload = function(){
    const container = document.getElementById("container-loarder");
    container.style.visibility ="hidden";
    container.style.opacity = "0";
}

//toggle
var toggler = document.querySelector('#navegacion .navbar-toggler');
var iconMenu = document.querySelector('.iconmenu');
var navLinks = document.querySelectorAll('#navegacion .navbar-nav a');
var navbarCollapse = document.querySelector('#menuprincipal');
//citaCerar
var BtnCerrar = document.getElementById("btnCerrar");
var cita = document.querySelector(".container-cita");
//btn de reservar una cita
var reservarCita = document.getElementById("btnReservarCita");
var reservarCita2 = document.getElementById("btnReservarCita2");


//codigo para abrir la cita
reservarCita.addEventListener("click", ()=>{
    cita.style.display ="block"
})
reservarCita2.addEventListener("click", ()=>{
    cita.style.display ="block"
})




// Código para cerrar la cita
BtnCerrar.addEventListener("click", () => {
    cita.style.display = "none";
});



//codigo para cerrar el toggle
if (toggler) {
  toggler.addEventListener('click', function() {
    iconMenu.classList.toggle('cerraricono');
  });
}

toggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});