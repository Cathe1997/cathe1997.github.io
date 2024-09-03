// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const images = document.querySelectorAll(".galeria img");

// Recorrer todas las imágenes para añadir el evento de clic
images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});