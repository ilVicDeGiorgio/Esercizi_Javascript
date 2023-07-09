const personObject = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25
};

const keys = Object.keys(personObject);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = personObject[key];
    console.log(key + ": " + value);
}
