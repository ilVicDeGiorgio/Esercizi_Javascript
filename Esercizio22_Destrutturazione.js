// Utilizzare la destrutturazione per assegnare i valori con una sola riga di codice.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

const {id, firstName, lastName, age} = person;
console.log(id, firstName, lastName, age);