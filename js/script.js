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


async function carregarVersiculo() {
    try {
        // API pública gratuita
        const resposta = await fetch("https://bible-api.com/?random=verse&translation=almeida");
        const dados = await resposta.json();

        document.getElementById("versiculo-texto").innerText = `"${dados.text}"`;
        document.getElementById("versiculo-ref").innerText = dados.reference;

    } catch (erro) {
        document.getElementById("versiculo-texto").innerText =
            "Não foi possível carregar o versículo.";
    }
}

carregarVersiculo();

const versiculos365 = [
    { ref: "Salmos 23:1", texto: "O Senhor é o meu pastor; nada me faltará." },
    { ref: "João 3:16", texto: "Porque Deus amou o mundo de tal maneira..." },
    { ref: "Filipenses 4:13", texto: "Tudo posso naquele que me fortalece." },
    { ref: "Salmos 37:5", texto: "Entrega o teu caminho ao Senhor..." },
    { ref: "Romanos 8:28", texto: "Sabemos que todas as coisas cooperam para o bem..." },
    {ref: "João 8:12", "texto": "Eu sou a luz do mundo." },
    {ref: "Salmos 100:5", "texto": "O Senhor é bom; eterna é a sua misericórdia." },
    {ref: "Hebreus 13:8", "texto": "Jesus Cristo é o mesmo ontem, hoje e eternamente." },
    {refe: "Mateus 6:33", "texto": "Buscai primeiro o Reino de Deus." },
    {ref: "Salmos 18:2", "texto": "O Senhor é a minha rocha e fortaleza." },
    {ref: "1 Tessalonicenses 5:16", "texto": "Regozijai-vos sempre." },
    {ref: "Provérbios 18:10", "texto": "Torre forte é o nome do Senhor." },
    {ref: "Salmos 27:1", "texto": "O Senhor é a minha luz e salvação." },
    {ref: "Romanos 6:23", "texto": "O dom gratuito de Deus é a vida eterna." },
    {ref: "João 16:33", "texto": "No mundo tereis aflições, mas tende bom ânimo." },
    // 👉 Aqui você pode continuar até completar 365
];


