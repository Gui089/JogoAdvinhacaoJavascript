function sayMyName(name) {
    console.log(name);

    name();

    console.log("Estou em outra funcao");
}

sayMyName(
    () => {
        console.log("Guilherme");
    }
)
