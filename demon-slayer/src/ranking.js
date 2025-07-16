let crescente = false;

export function ordenarRanking(lista) {
  if (crescente) {
    lista.sort((a, b) => a.forca - b.forca);
  } else {
    lista.sort((a, b) => b.forca - a.forca);
  }
  crescente = !crescente;
  return lista;
}
