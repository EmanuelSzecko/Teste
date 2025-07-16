function ordenarRankingTeste(lista, modo = "decrescente") {
  if (modo === "crescente") {
    return [...lista].sort((a, b) => a.forca - b.forca);
  } else {
    return [...lista].sort((a, b) => b.forca - a.forca);
  }
}

const personagensRanking = [
  { nome: "Tanjiro", forca: 80 },
  { nome: "Zenitsu", forca: 70 },
  { nome: "Inosuke", forca: 75 },
];

describe("Ordenação de Ranking (modo previsível para teste)", () => {
  test("Deve ordenar do maior para o menor (decrescente)", () => {
    const resultado = ordenarRankingTeste(personagensRanking, "decrescente");
    expect(resultado[0].forca).toBeGreaterThanOrEqual(resultado[1].forca);
    expect(resultado[1].forca).toBeGreaterThanOrEqual(resultado[2].forca);
  });

  test("Deve ordenar do menor para o maior (crescente)", () => {
    const resultado = ordenarRankingTeste(personagensRanking, "crescente");
    expect(resultado[0].forca).toBeLessThanOrEqual(resultado[1].forca);
    expect(resultado[1].forca).toBeLessThanOrEqual(resultado[2].forca);
  });
});
