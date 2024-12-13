let notas = [
  ["A", 4, 8.5, 6, 5],
  ["B", 9, 7, 8.5, 6],
  ["C", 5.5, 6, 7.5, 8],
  ["D", 8, 9, 7, 8.5],
  ["E", 4, 7.5, 6, 5],
  ["F", 9, 8.5, 6, 10],
];
let media;
for (let i = 0; i <= notas.length - 1; i++) {
  media = 0;
  for (let j = 0; j <= notas[i].length - 1; j++) {
    if (j !== 0) {
      media += notas[i][j];
    }
  }
  console.log(`A média de ${notas[i][0]} é ${(media / 4).toFixed(1)}`);
}

//os)

//console.log(mediasCalculadas)

function verificarAprovacao(media, notaMinima = 7) {
  return media >= notaMinima ? "Aprovado" : "Reprovado";
}
mediasCalculadas.forEach((media) => {
  //console.log(verificarAprovacao(media))
  console.log(`O resultado ${verificarAprovacao(media)},  ${media}`);
});
