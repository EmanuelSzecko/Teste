function initGaleria() {
  const imagemPrincipal = document.querySelector(".imagem-principal");
  const miniaturas = document.querySelectorAll(".miniatura");
  const botaoZoom = document.querySelector(".botao-zoom");

  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
      const novaSrc = miniatura.getAttribute("data-src");
      if (imagemPrincipal) {
        imagemPrincipal.src = novaSrc;
      }
    });
  });

  if (botaoZoom && imagemPrincipal) {
    botaoZoom.addEventListener("click", () => {
      imagemPrincipal.classList.toggle("zoom");
    });
  }
}

module.exports = { initGaleria };
