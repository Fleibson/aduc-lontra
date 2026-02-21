// Aguarda o DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {

    /* ================= MODAL ================= */

    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const modalClose = document.getElementById("modal-close");

    if (modal && modalBody && modalClose) {

        function openModal(src) {
            modalBody.innerHTML = "";

            if (src.toLowerCase().endsWith(".mp4")) {
                const video = document.createElement("video");
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                modalBody.appendChild(video);
            } else {
                const img = document.createElement("img");
                img.src = src;
                img.alt = "Imagem ampliada";
                modalBody.appendChild(img);
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

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

        modalClose.addEventListener("click", closeModal);

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });

        window.openModal = openModal;
    }

    /* ================= MENU MOBILE ================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        // Abrir / fechar menu
        menuToggle.addEventListener("click", function (e) {
            e.stopPropagation(); // evita conflito
            navMenu.classList.toggle("active");
        });

        // Fecha menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });

        // Fecha ao clicar fora
        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove("active");
            }
        });
    }

});