function initCuriosidades() {
  const titulos = document.querySelectorAll(".titulo");
  titulos.forEach((titulo) => {
    titulo.addEventListener("click", () => {
      const conteudo = titulo.nextElementSibling;
      if (!conteudo) return;

      const aberto = conteudo.classList.contains("aberto");

      if (aberto) {
        conteudo.classList.remove("aberto");
      } else {
        document.querySelectorAll(".conteudo.aberto").forEach((el) => {
          el.classList.remove("aberto");
        });
        conteudo.classList.add("aberto");
      }
    });
  });
}

module.exports = { initCuriosidades };
