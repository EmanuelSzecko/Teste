function initComentarios() {
  const input = document.querySelector("#comentario");
  const botao = document.querySelector("#enviar-comentario");
  const lista = document.querySelector("#lista-comentarios");

  botao.addEventListener("click", () => {
    const texto = input.value.trim();

    if (texto.length === 0) return;

    const li = document.createElement("li");
    li.textContent = texto;
    li.classList.add("comentario-animado");

    lista.appendChild(li);
    input.value = "";
  });
}

module.exports = { initComentarios };
