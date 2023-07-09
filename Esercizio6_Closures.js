function printName() {
    let name = "John";

    function inner() {
        return "Hello " + name;
    }

    return inner;
}

const helloName = printName();
console.log(helloName());
