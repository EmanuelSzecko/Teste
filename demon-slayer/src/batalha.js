function simularBatalha(hashira, lua) {

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

module.exports = { simularBatalha };
