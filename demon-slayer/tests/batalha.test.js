const { simularBatalha } = require("../src/batalha");

describe("Função simularBatalha", () => {
  test("Deve retornar resultado válido", () => {
    const resultado = simularBatalha("Tengen", "Akaza");
    expect(typeof resultado.resultado).toBe("string");
    expect(resultado.vidaHashira).toBeGreaterThanOrEqual(0);
    expect(resultado.vidaLua).toBeLessThan(100);
  });

  test("Deve retornar empate quando vidas forem iguais", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5); 
    const resultado = simularBatalha("Rengoku", "Akaza");
    expect(resultado.resultado).toBe("Empate sangrento!");
    Math.random.mockRestore();
  });
});
