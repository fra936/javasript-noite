let num = Math.floor(Math.random() * 100) + 1; // 1 - 100
let vidas = 8;
while (vidas > 0) {
  let chute = parseInt(prompt("Digite um número"));
  if (chute === num) {
    alert("Acertou!!!");
    break;
  }
  vidas--;
  if (vidas === 0) {
    alert(`Acabaram suas chances, o número era ${num}`);
  } else {
    if (chute > num) {
      alert(`Digite um número MENOR. Você ainda tem ${vidas} chances`);
    } else {
      alert(`Digite um número MAIOR. Você ainda tem ${vidas} chances`);
    }
  }
}
