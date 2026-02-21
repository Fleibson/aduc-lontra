// Aguarda o DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {

    /* ================= MODAL ================= */

    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const modalClose = document.getElementById("modal-close");

    if (modal && modalBody && modalClose) {

        // Abrir modal
        function openModal(src) {
            modalBody.innerHTML = "";

            // Verifica se é vídeo (.mp4)
            if (src.toLowerCase().endsWith(".mp4")) {
                const video = document.createElement("video");
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                video.classList.add("modal-body-content");
                modalBody.appendChild(video);
            } else {
                const img = document.createElement("img");
                img.src = src;
                img.alt = "Imagem ampliada";
                img.classList.add("modal-body-content");
                modalBody.appendChild(img);
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        // Fechar modal
        function closeModal() {
            const video = modalBody.querySelector("video");
            if (video) {
                video.pause();
                video.currentTime = 0;
            }

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
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });

        // Torna função global para uso no HTML (onclick)
        window.openModal = openModal;
    }

    /* ================= MENU MOBILE ================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

});