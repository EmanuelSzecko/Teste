/**
 * @jest-environment jsdom
 */

const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");
const { initLuas } = require("../src/luas");

describe("Mostrar poderes dos Luas Superiores", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="lua">
        <button class="botao-poder">Mostrar poderes</button>
        <div class="poderes">Lâmina da Lua, regeneração, marca demoníaca</div>
      </div>
    `;
    initLuas();
  });

  test("Clicar no botão mostra os poderes", () => {
    const botao = document.querySelector(".botao-poder");
    const poderes = document.querySelector(".poderes");

    fireEvent.click(botao);

    expect(poderes).toHaveClass("visivel");
  });

  test("Clicar novamente esconde os poderes", () => {
    const botao = document.querySelector(".botao-poder");
    const poderes = document.querySelector(".poderes");

    fireEvent.click(botao); // mostra
    fireEvent.click(botao); // esconde

    expect(poderes).not.toHaveClass("visivel");
  });
});
