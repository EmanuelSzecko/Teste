function initLuas() {
  const botoes = document.querySelectorAll(".botao-poder");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const poderes = botao.nextElementSibling;
      if (poderes) {
        poderes.classList.toggle("visivel");
      }
    });
  });
}

module.exports = { initLuas };
