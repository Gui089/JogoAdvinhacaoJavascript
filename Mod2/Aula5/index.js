let myArray = new Array(10);
for (let i = 0; i < myArray.length; i++) {
     myArray[0] = "Eloisa";
     myArray[1] = "Guilherme";
     myArray[i] = Math.random();
}
console.log(myArray);