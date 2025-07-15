// Função pura que simula a batalha e retorna o vencedor
function simularBatalha(hashira, lua) {
  // Gera vida random para exemplo (para teste, pode ser mockado)
  const vidaHashira = Math.floor(Math.random() * 100);
  const vidaLua = Math.floor(Math.random() * 100);

  let resultado = "";

  if (vidaHashira > vidaLua) {
    resultado = `${hashira} venceu a batalha!`;
  } else if (vidaLua > vidaHashira) {
    resultado = `${lua} esmagou o oponente!`;
  } else {
    resultado = `Empate sangrento!`;
  }

  return { vidaHashira, vidaLua, resultado };
}

// Exporta para usar em testes
module.exports = { simularBatalha };
