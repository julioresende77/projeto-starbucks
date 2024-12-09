const imagemPrincipal = document.querySelector(".imagem-principal");
const bgImagem = document.querySelector(".bg-imagem");

function mudarImagem(img) {
    imagemPrincipal.src = img;
}

function mudarBg(color) {
    bgImagem.style.backgroundColor = color;
};
