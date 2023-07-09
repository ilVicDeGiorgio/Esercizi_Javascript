function nickname(persons) {
    const nicknames = [];
    
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const nickname = `.${person.nome}-${person.età}`;
        nicknames.push(nickname);
    }
    
    return nicknames;
}

const persone = [
    { nome: 'Paul', età: 16 },
    { nome: 'George', età: 17 },
    { nome: 'Lucas', età: 21 },
    { nome: 'Marco', età: 32 },
    { nome: 'Peter', età: 18 },
    { nome: 'Carl', età: 13 },
    { nome: 'Simon', età: 24 },
    { nome: 'Mark', età: 15 },
    { nome: 'Sandra', età: 34 },
    { nome: 'Alice', età: 28 }
];

const soprannomi = nickname(persone);
console.log(soprannomi);
