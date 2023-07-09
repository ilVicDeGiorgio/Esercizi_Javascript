const somma = (a, b) => a + b;

const sottrazione = (a, b) => a - b;

const moltiplicazione = (a, b) => a * b;

const divisione = (a, b) => a / b;

const result = divisione(sottrazione(moltiplicazione(somma(2, 4), somma(5, 2)), 2), 5);

console.log(result);
