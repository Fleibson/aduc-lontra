const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

// Abrir modal
function openModal(src) {
    modalBody.innerHTML = "";

    // Verifica se é vídeo
    if (src.includes(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.classList.add("modal-body-content");
        modalBody.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("modal-body-content");
        modalBody.appendChild(img);
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Fechar modal
function closeModal() {
    modal.classList.remove("active");
    modalBody.innerHTML = "";
    document.body.style.overflow = "auto";
}

// Botão X
modalClose.addEventListener("click", closeModal);

// Clique fora fecha
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Tecla ESC fecha
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

// ===== MENU MOBILE =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

});

