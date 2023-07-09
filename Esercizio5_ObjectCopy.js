const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;

//Quando viene assegnato l'oggetto person1 all'oggetto person2 utilizzando l'istruzione person2 = person1 non viene creata una nuova copia dell'oggetto person1, entrambe le variabili person1 e person2 fanno riferimento allo stesso oggetto in memoria, quindi se andiamo a cambiare una qualche proprietà dell'oggetto sarà visibile sia per person1 che per person2.//
