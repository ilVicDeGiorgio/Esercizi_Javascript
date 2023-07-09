function calcoloSalario(ruolo) {
    let salario;

    switch (ruolo) {
    case 'CEO':
        salario = 2200;
        break;
    case 'manager':
    case 'CTO':
        salario = 1800;
        break;
    case 'sviluppatore':
        salario = 1500;
        break;
    default:
        salario = 1000;
        break;
}

return salario + '€';
}

const ceo = calcoloSalario('CEO');
const manager = calcoloSalario('manager');
const cto = calcoloSalario('CTO');
const developer = calcoloSalario('sviluppatore');
const other = calcoloSalario('other');

console.log(ceo);
console.log(manager);
console.log(cto);
console.log(developer);
console.log(other);
