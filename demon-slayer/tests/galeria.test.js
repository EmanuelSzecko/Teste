/**
 * @jest-environment jsdom
 */

const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");
const { initGaleria } = require("../src/galeria");

describe("Funcionalidade da Galeria de Imagens", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="galeria">
        <img class="imagem-principal" src="default.jpg" />
        <div class="miniaturas">
          <img class="miniatura" data-src="img1.jpg" />
          <img class="miniatura" data-src="img2.jpg" />
        </div>
        <button class="botao-zoom">Zoom</button>
      </div>
    `;

    initGaleria();
  });

  test("Clicar em miniatura troca imagem principal", () => {
    const imagemPrincipal = document.querySelector(".imagem-principal");
    const miniatura = document.querySelector(".miniatura");

    fireEvent.click(miniatura);

    expect(imagemPrincipal).toHaveAttribute("src", "img1.jpg");
  });

  test("Botão de zoom adiciona classe 'zoom'", () => {
    const imagemPrincipal = document.querySelector(".imagem-principal");
    const botaoZoom = document.querySelector(".botao-zoom");

    fireEvent.click(botaoZoom);

    expect(imagemPrincipal).toHaveClass("zoom");
  });

  test("Clicar duas vezes no botão de zoom remove a classe", () => {
    const imagemPrincipal = document.querySelector(".imagem-principal");
    const botaoZoom = document.querySelector(".botao-zoom");

    fireEvent.click(botaoZoom); // adiciona
    fireEvent.click(botaoZoom); // remove

    expect(imagemPrincipal).not.toHaveClass("zoom");
  });
});

