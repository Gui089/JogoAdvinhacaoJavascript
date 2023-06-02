let noteOne = Number(prompt(`Digite sua primeira nota: `));
let noteTwo = Number(prompt(`Digite sua segunda nota: `));
let noteThree = Number(prompt(`Digite sua terceira nota: `));

let midle = (noteOne + noteTwo + noteThree) / 3;


if(midle >= 7) {
    alert(`Parabens vc passou e sua media :${midle.toFixed(2)}`);
}
else {
    alert(`Poxa, vc precisa estudar mais, sua media : ${midle.toFixed(2)}`);
}
