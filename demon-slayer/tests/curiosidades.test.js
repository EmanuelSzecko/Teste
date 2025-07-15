/**
 * @jest-environment jsdom
 */

const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");
const { initCuriosidades } = require("../src/curiosidades");

describe("Comportamento do acordeão em Curiosidades", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="acordeao">
        <div class="item">
          <div class="titulo">Hashiras</div>
          <div class="conteudo">Informações sobre os Hashiras</div>
        </div>
        <div class="item">
          <div class="titulo">Luas Superiores</div>
          <div class="conteudo">Informações sobre os Luas Superiores</div>
        </div>
      </div>
    `;

    initCuriosidades();
  });

  test("Clicar em um título abre o conteúdo", () => {
    const titulo = document.querySelector(".titulo");
    const conteudo = titulo.nextElementSibling;

    fireEvent.click(titulo);

    expect(conteudo).toHaveClass("aberto");
  });

  test("Abrir um conteúdo fecha o anterior", () => {
    const titulos = document.querySelectorAll(".titulo");
    const conteudo1 = titulos[0].nextElementSibling;
    const conteudo2 = titulos[1].nextElementSibling;

    fireEvent.click(titulos[0]); // abre 1
    fireEvent.click(titulos[1]); // abre 2, deve fechar 1

    expect(conteudo1).not.toHaveClass("aberto");
    expect(conteudo2).toHaveClass("aberto");
  });

  test("Clicar duas vezes no mesmo título fecha o conteúdo", () => {
    const titulo = document.querySelector(".titulo");
    const conteudo = titulo.nextElementSibling;

    fireEvent.click(titulo); // abre
    fireEvent.click(titulo); // fecha

    expect(conteudo).not.toHaveClass("aberto");
  });
});
