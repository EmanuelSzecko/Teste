/**
 * @jest-environment jsdom
 */

const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");
const { initComentarios } = require("../src/comentarios");

describe("Sistema de Comentários", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="comentario" />
      <button id="enviar-comentario">Enviar</button>
      <ul id="lista-comentarios"></ul>
    `;
    initComentarios();
  });

  test("Adiciona comentário ao clicar no botão", () => {
    const input = document.querySelector("#comentario");
    const botao = document.querySelector("#enviar-comentario");
    const lista = document.querySelector("#lista-comentarios");

    input.value = "Esse anime é demais!";
    fireEvent.click(botao);

    expect(lista.children.length).toBe(1);
    expect(lista.children[0]).toHaveTextContent("Esse anime é demais!");
  });

  test("Não adiciona comentário vazio", () => {
    const botao = document.querySelector("#enviar-comentario");
    const lista = document.querySelector("#lista-comentarios");

    fireEvent.click(botao);

    expect(lista.children.length).toBe(0);
  });
});
